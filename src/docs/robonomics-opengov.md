---
title: Robonomics OpenGov

contributors: [Leemo94]
---

## Introduction

Robonomics has shifted the parachain's governance model to Polkadot's sophisticated OpenGov mechanism that allows the chain to evolve over time, at the ultimate behest of the token holders.
Robonomics' transition to OpenGov ensures that the token holder DAO, which control the majority of the stake, can always command the direction of the Robonomics parachain, enacting any change to the network that they deem suitable.

{% roboWikiNote {title:"Note:", type: "warning"}%} OpenGov is only applicable to the Robonomics Parachain which is a Substrate based chain connected to the Kusama Relay Chain. OpenGov is not applicable for the Robonomics Ethereum implementation, as the Ethereum mainnet does not currently support sophisticated governance systems such as OpenGov {% endroboWikiNote %}

OpenGov changes how the day-to-day operations and decision making are carried out on the parachain. It provides greater clarity as to the scope of referendums and has the potential to dramatically increase the throughput of decisions that are made on the parachain.

OpenGov has been live on the Kusama relay chain for a few months at the time of writing, and has proven that it dramatically increases the number of decisions (individual & discrete referenda) that the token holder DAO can propose, vote on, and through voting – ultimately control the direction of the protocol.

**The following content contained within this section of the wiki will go over the core principles of OpenGov on the Robonomics parachain and aims to help you better understand the concepts behind OpenGov.**

*It is important to note that governance is a constantly evolving mechanism in the protocol, especially at the early stages of implementation.*

For those purely interested in the Robonomics OpenGov Track parameters, see [here](https://docs.google.com/spreadsheets/d/1CzUKxl5bEhLQRLC223NB81RTH4X4HgAoS1HPng23mXE/edit?usp=sharing).

## About Referenda

Referenda are simple, inclusive, and stake-based voting schemes. Each referendum has a specific proposal associated with it that takes the form of a privileged function call in the chains' runtime. This can also include the most powerful call `set_code`, which has the ability to switch out the entire code of the chains' runtime – this is unique to Substrate based chains, and removes the requirement for a "hard fork" of the chain when updating the chains' business logic (runtime).

Referenda are discrete events which have a fixed voting period (more about the different periods during the lifecycle of a referendum later). Individual token holders can vote in one-of-three ways on referenda – AYE (agree/yes), NAY (disagree/no), or ABSTAIN from voting entirely.

All referenda have an enactment delay associated with them. This is the period between the referendum ending and, assuming the referendum was approved, the changes being enacted on the network.

{% roboWikiNote {title:"Note:", type: "warning"}%} There is a **Minimum** Enactment Period specifically set for each different type of Origin, but the originator of a particular referendum can set that specific referendums' tasks to execute many blocks into the future {% endroboWikiNote %}

Referenda are considered "baked" if it is closed and the votes are tallied. Assuming that the referendum was approved, it will be scheduled for enactment (in the chains' scheduler). Referenda are considered "unbaked" if the outcome is pending – such as if the referendum is still currently being voted on.

With the addition of OpenGov, anyone is able to start a referendum at any time, and they can do so as many times as they wish. OpenGov removes the limitation of only 1 referendum being able to be processed at a time (note that, in Gov v1, only 1 referendum can be voted on at at time. The only exception being additional emergency referendum by fast tracked Technical Committee which can also be simultaneously voted on by the community).

OpenGov introduces several new features / concepts known as Origins and Tracks, and these are introduced to help aid in the flow and processing of referenda in the protocol.

Each Origin is associated with a single referendum class, and each class is associated with a track. The track outlines the lifecycle for the referendum and is specific for that particular Origin from which the referendum originates. Having tracks with their own specific parameters allows the network for dynamically modify the lifecycle of referenda based on their privilege level (you can think of privilege level as being how powerful a referenda can be / what types of changes it can make to the protocol).

*Think of Origins as the power associated with a referendum, and think of Tracks as the voting parameters associated with a referendum, such as the lengths of it's periods, and the Approval and Support criteria.*

For example, a runtime upgrade does not have the same implications for the protocol as a small treasury tip, and therefore different origins are needed in which different turnouts, approvals, deposits, and enactment periods (Tracks) will be predetermined in the chains' pallet.

## Proposing a Referendum & Referendum Lifecycle

### Preparation Period

In OpenGov, when a referendum is initially created, it can be immediately voted on by the token holder community. However, it is not immediately in a state where it can end, or otherwise have its votes counted, be approved and summarily enacted. Instead, referenda must fulfil a number of criteria before they are moved into the Decision Period. Until referenda enter the Decision Period, they will remain undecided – and will eventually time-out after the overall lifecycle period as specified in the individual track.

{% roboWikiPicture {src:"docs/robonomics-opengov/1.jpeg", alt:"picture"} %}{% endroboWikiPicture %}

The criteria for a referendum to enter the Decision Period is as follows:
1. A Preparation Period that outlines the amount of time that must elapse before the Decision Period can begin. This Preparation Period helps to mitigate against the possibility of "decision sniping" whereby an attacker controlling a substantial amount of voting power might seek to use their large stake to have a referendum be passed immediately after proposing, circumventing the possibility for the other members of the token holder DAO to have adequate time to consider the referendum and participate in the vote. Hence why Origins with higher privilege levels have significantly longer Preparation Periods.

2. There must be room for the decision. Each track has it's own limits for the amount of referenda which can be decided upon simultaneously (max_deciding). Tracks that have more powerful privilege levels will have lower limits. For example, the Root level origin will have a significantly lower amount of referendums that can be decided upon simultaneously in comparison to lower privilege level origins such as the Small Tipper origin.

3. The Decision Deposit must be submitted. Initially creating a referendum is fairly cheap, and the value of the Submission Deposit (reserved when the referendum is initially created) is fairly low, and is mainly made up of the value it costs for the on-chain storage associated with the referendum. Decision Deposits are significantly higher, which is required in order to combat spam, and plays into the economical game which OpenGov brings, which we will go through later.

Once all of these three criteria above have been met, the referendum will move into the Decision Period. The votes on the referendum will then be counted towards the outcome.

### Decision Period

*For a quick video demonstration of the Decision Period, see [this video](https://www.youtube.com/watch?v=wk58C-2CqPI)*.

Once a referendum has met all of the criteria as detailed in the section above, it will enter the Decision Period.

The Decision Period revolves around two main concepts, that being the Approval and Support criteria.

Approval is defined as the share of the approval vote weight (AYEs vs NAYs) compared to the total vote weight (all AYE & NAY votes combined). Conviction of each vote counts towards the overall weight of the AYE/NAY votes (more about conviction voting / voluntary lock up in a later section).

Support is the total number of votes (tokens) that have participated in the referendum (and does not get adjusted for conviction) compared to the total possible votes that could be made in the system (think of this as the total issuance of XRT on the parachain – notably, the total circulating supply of XRT is not the main factor here, due to the fact that some portion of that number exists on Ethereum as ERC-20 tokens).

**Votes which are in the ABSTAIN direction do NOT contribute to the Approval criteria, but are included / count towards the Support criteria**

A referendum must meet the Support AND Approval criteria during the Decision Period in order to progress to the Confirmation Period.

For details of the individual Support and Approval criteria for each track see this [spreadsheet](https://docs.google.com/spreadsheets/d/1CzUKxl5bEhLQRLC223NB81RTH4X4HgAoS1HPng23mXE/edit?usp=sharing).

### Confirmation Period

Each track has it's own specific duration for it's Confirmation Period. Tracks which have greater privilege levels (such as Root) have significantly longer Confirmation Periods than    those with lower privilege levels (such as Small Tipper).

Referenda must continue to meet the Approval and Support criteria for the entire duration of the Confirmation Period, otherwise they will once again go back into the Decision Period (note: the Decision Period is not paused during the Confirmation Period, so it is entirely possible that a Decision Period may expire during the Confirmation Period, meaning that if a referendum is bumped out of the Confirmation Period due to it no longer meeting the Approval and Support criteria, it will then be considered as a failed referendum and not enacted).

**It is possible to adjust the Approval and Support criteria for individual tracks through a referendum with Root Origin privileges.**

Origins with lower privilege levels have significantly easier approval and support criteria (set by the track) to be met than those with higher privilege levels. Similarly, origins with higher privilege levels have less steep curves than those with less privileges (as defined in the track), in order to ensure that the token holder DAO does indeed approve of the referendum, and avoid referendum sniping for high privilege origin referenda.

In OpenGov, referenda that are not approved after the Decision Period expires are considered rejected by default, and both the submission and decision deposits are refunded to their originators (note: the decision deposit can be posted by someone other than the originator of the referendum).

If a referendum manages to continually meet the Approval and Support criteria for the entire Confirmation Period, then it is considered approved, and will be scheduled to execute from the proposed origin, but the referendum will only execute after the minimum enactment period has elapsed.

### Enactment Period

The Enactment Period is specified by the originator when the referendum is proposed, but it is subject to the Minimum Enactment Period which is specified in each track. More powerful Origins have a much higher minimum enactment period than those with less privileges. This ensures that the network has ample time to prepare for any changes that powerful referendum may impose.

## Voluntary Locking / Conviction

Robonomics uses a concept known as voluntary locking, or conviction voting. This allows token holders to increase their voting power by deciding for how long they are willing to lock up their tokens for a particular referendum. This mechanism only affects the Approval criteria for each referendum, and conviction voting does not affect the Support criteria.

Conviction Voting can be calculated using this formula:

$$\text{Approval Votes} = \text{Tokens} * \text{Conviction\_Multiplier}$$


This table shows you how each increasing level of lock-up period multiplies your vote for the approval criteria:

| Lock Periods | Vote Multiplier | Lock Up Days |
|--------------|-----------------|--------------|
| No Lock      | 0.1x            | 0          |
| 1            | 1x              | 7            |
| 2            | 2x              | 14           |
| 4            | 3x              | 28           |
| 8            | 4x              | 56           |
| 16           | 5x              | 112          |
| 32           | 6x              | 224          |


The maximum amount of conviction that a token holder can use is 6x conviction. You can only set conviction as per the table above, and you cannot, for example, use 5.5x conviction.

While a token is locked due to voting, they can still be used to vote in other referendums, however, they will not be part of your transferrable balance (you cannot send it to another account) – and the balance will only become transferrable again once the entire lock up period has expired.

## Vote Delegation

In OpenGov, a mechanism was added in order to allow tokens holders who don't necessarily have enough time to review each referendum to still have their tokens be used as part of the governance system, this is known as vote delegation.

Token holders can choose to delegate their voting power to another voter in the system (another account). Voters can specify to delegate their voting power in an agile way, allowing them to assign their voting power to a different account for each individual Origin. Voters can also set to assign a different amount of voting power for each Origin (number of tokens and conviction level).

This delegation feature has one goal, to increase voter turnout, and to help to ensure that the required turnouts to meet the Approval and Support criteria are met.

To delegate your voting power, you can use the "Delegate" function which you can find on the Governance -> Referendum section of the [Robonomics Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/explorer). Alternatively, users can submit the convictionVoting(Delegate) extrinsic using the Developer -> Extrinsics section of the Robonomics Portal, however using the "Delegate" function of the referendum section of the portal is far easier.

## Cancelling / Killing Referendum and the Governance Economic Game

In OpenGov, there are Origins which are dedicated to rejecting ongoing referendums, regardless of it's status. These are known as the Governance Canceller and Governance Killer tracks.

These Origins intervene on a referendum that is already been voted on. These Origins, if the referendum originating from them is approved, will immediately reject an ongoing referendum regardless of it's status.

Cancellation itself is a type of referendum which must be voted on by the token holders in order to be executed. Cancellation comes with its own origin and track which have a lower lead time (Decision Period, etc.), and have Approval and Support curves with a steeper/sharper curve (meaning their criteria are much easier to meet over time) than other Origins. This is due to the fact that cancellation of a referendum usually will come with a sense of urgency.

Governance Canceller aims to instantly reject an already ongoing referendum. When a referendum is cancelled by this origin, both the Submission and Decision Deposit are refunded to their originators. An example of when a referendum might be considered to be cancelled is if the originator has made some human-error in their referendum's contents, and hasn't necessarily tried to do anything malicious.

Governance Killer aims to instantly reject an already ongoing referendum. This is where the governance economic game comes into play. Origins with high privilege levels, such as Root, have a Decision Deposit which requires a high amount of capital (XRT tokens) to be posted in order for the referendum to enter the Decision Period.

If a malicious actor submits a referendum, such as a referendum with Root origins which aims to `set_code` of the chains' runtime to something which will stop the chain producing blocks, then the token holder DAO can raise a counter Governance Killer referendum to punish this action. If the malicious referendum is rejected via the Governance Killer origin, then both the Submission and Decision deposits are slashed, meaning that the originator (the account(s) which posted these deposits) will lose those funds.

This means that their is a severe economic consequence for malicious actors to attempt to raise referendum which would have severe negative impacts for the chain, which in theory will stop any malicious actor from attempting to do this.

The Decision Deposit for the Governance Killer track itself is quite high, this is in order to stop equally malicious actors from attempting to slash deposits of otherwise good referendum. **An existing Governance Killer referendum can be killed by a subsequent Governance Killer referendum.**

## Robonomics Technical Committee & Whitelisted Origin

This group is a self-governing expert body which has the primary goal of representing humans who embody and possess the technical knowledge of the Robonomics network protocol.

This group (and only this group) is able to originate referenda from the Whitelist pallet. This pallet does one thing, it allows one Origin to escalate the privilege level of another Origin for a certain operation.

This group can authorize referendum from a origin known as Whitelisted-Root, and these referendum can be executed with Root-level privileges, but these referendum will only successfully work with certain specified commands that have been authorized by the group. The Whitelist pallet verifies two things:
1. The Origin really is the Whitelisted-Root (i.e. that referendum passed through this Origin's track).
2. The proposal has indeed been whitelisted by the group.

If both conditions are true, then the operation will execute with Root-level privileges.

This system enables the ability to have a new parallel Track (Whitelisted-Root Origin), whose parameters allow for a shorter voting turnaround (Approval and Support criteria are slightly easier to meet than Root). This open and transparent process allows this body of experts for the Robonomics Network Protocol to propose referendums that they have determined are safe, and time-critical.

It should be noted that the Support Criteria for referendum initiated with the Whitelisted-Root origin does not trend towards 0 like a lot of other origins/tracks. This ensures that this group does not have defacto control over the entire Robonomics Network Protocol, and requires a minimum level of Support (voter turnout) from the overall token holder DAO.


## Referendum Durations

It is important to understand, that the duration of each individual referendum is not a concrete thing, it is not set in stone. Some periods within the referendum's lifecycle, such as the minimum enactment period, do indeed have a concrete duration, however – others, including the decision period do not. For example, it is not accurate to add up the maximum durations for the Preparation, Decision, Confirmation, and Min. Enactment Periods and state that "each referendum will take X number of days", it is a lot more fluid than that.

Let's look at this through the lens of a few separate referendums, all of which originate from the same Origin, in this case, the Root origin.

The Root Origin has it's own track, where the durations for each period are set, as well as the Approval and Support curves.

It is important to remember that Referendums will only proceed to the next stage in their lifecycle if certain conditions are met.

{% roboWikiPicture {src:"docs/robonomics-opengov/2.jpeg", alt:"picture"} %}{% endroboWikiPicture %}

You should assume in the following images that, in order for a referendum ascend into the next stage of it's lifecycle, the conditions as described in the above image would have to have been met (unless otherwise stated).


### Maximum possible duration with very little voter turnout

The below image is a representation of the maximum possible timeline for a referendum, think of this as a referendum that:
1. Has had it's Decision Deposit posted, and therefore has gone into the Decision Period.
2. Has a single vote, for example, 1 XRT, in the AYE direction – this will mean that it will only meet the required Support (voter turnout) at the very end of the Decision Period (since the overall Support is extremely low), but has 100% Approval, so eventually will meet the requirements of entering the Confirmation Period.
3. Continues to meet the aforementioned criteria during the Confirmation Period.
4. The proposal raised by the referendum will be enacted exactly on the same block as the Minimum Enactment Period ends – technically the originator of referendum can set the network changes as detailed in the referendum to enact many blocks into the future, so realistically the actual lifecycle of an individual referendum could span over many days, weeks, months, or years.

{% roboWikiPicture {src:"docs/robonomics-opengov/3.jpeg", alt:"picture"} %}{% endroboWikiPicture %}

We can see that in this example, the lifecycle of the referendum would be (approximately) 17 days.


### Duration with a lot of voter turnout (with a high amount of AYE votes)

Now let's take a look at a referendum where the XRT token holder DAO has expressed a lot of interest. In this example, we will assume that ~248,771 XRT in overall voter turnout has occurred, and all voters are voting in the AYE direction (note: technically at this stage of a Root referendum, as per the track, only 60% of votes must be in the AYE direction for a referendum to meet the Approval criteria).

{% roboWikiNote {title:"Note:", type: "warning"}%}  Always consult the most up-to-date track information for accurate information in regards to each Track, more info can be found on this [spreadsheet](https://docs.google.com/spreadsheets/d/1CzUKxl5bEhLQRLC223NB81RTH4X4HgAoS1HPng23mXE/edit?usp=sharing).
{% endroboWikiNote %}

In this example:
1. The Decision Deposit was posted during the Preparation Period, and therefore it was able to transition to the Decision Period at the end of the Preparation Period.
2. Many voters voted on this referendum – obtaining a voter turnout of ~248,771 XRT in a relatively short amount of time.
3. Votes were majority in the AYE direction (anything above 60% AYE).
4. The referendum continually meets the Confirmation Period criteria for it's entire Confirmation Period (Note: If a referendum stops to meet the criteria of the Confirmation Period, then it is bumped back to it's Decision Period).
5. The proposal raised by the referendum will be enacted exactly on the same block that the Minimum Enactment Period ends.

Due to the fact that there was ~248,771 XRT turnout, the referendum will meet the criteria to enter it's Confirmation Period after ~168 hours (7 days).

{% roboWikiPicture {src:"docs/robonomics-opengov/4.jpeg", alt:"picture"} %}{% endroboWikiPicture %}

We can see that in this second example that due to the fact that there was a good amount of voter turnout, the Decision Period actually ended halfway through it's maximum alloted time. Resulting in a referendum that can be enacted in ~10 days.


### Duration when Decision Deposit is never posted

Now, let's take a look at a referendum that was originated, but never has it's Decision Deposit posted. Such referendums are in a sort of "limbo" state, where their Preparation Period has ended, but since the Decision Deposit was not posted, the referendum stays in the "Preparing State".

{% roboWikiPicture {src:"docs/robonomics-opengov/5.jpeg", alt:"picture"} %}{% endroboWikiPicture %}

We can see that in this third example, due to the fact that the Decision Deposit was never posted, the referendum will actually never enter the Decision Period, instead it stays in the "Preparing State". This means that eventually, if no Decision Deposit is ever posted, the referendum will time out after the duration as specified in the timeOut constant of the pallet has elapsed.

This has happened on Kusama previously, whereby a referendum was posted with Root origins, but due to the high capital requirements to post the Decision Deposit, the referendum never entered the latter stages of it's lifecycle. Such referendum conclude with the "timed out" flag.


### Duration when Decision Deposit is posted late

Finally, let's take a look at an example where the Decision Deposit was not posted for quite a while after the referendum was originated. This has happened previously on Kusama where a referendum was posted with the Root origin, but the originator had to spend time to find someone with a high amount of capital to post the Decision Deposit on their behalf.


{% roboWikiPicture {src:"docs/robonomics-opengov/6.jpeg", alt:"picture"} %}{% endroboWikiPicture %}

In this final example, due to the fact that the Decision Deposit was posted after the Preparation Period had ended, but before the referendum has timed out – the lifecycle of the referendum is actually a lot longer than normal, as it enters the Decision Period after a longer amount of time.

It is important to note that the token holder DAO is able to vote AYE/NAY on referendums that are in the Preparation Period, or stuck in the "Preparing State".
