---
title: Υπηρεσίες Αντιγράφων Ασφαλείας

contributors: [tubleronchik, LoSk-p]
tools:
  - Robonomics Home Assistant Integration 1.4.2
    https://github.com/airalab/homeassistant-robonomics-integration
---

**Σε αυτό το άρθρο, θα μάθετε πώς να δημιουργήσετε αντίγραφα ασφαλείας της διαμόρφωσης του Home Assistant σας και πώς να την ανακτήσετε όταν χρειαστεί. Για τη δημιουργία αντιγράφων ασφαλείας, καλείται ένας υπηρεσία που δημιουργεί ένα ασφαλές αρχείο με τα αρχεία διαμόρφωσης. Επίσης, η υπηρεσία προσθέτει τις διαμορφώσεις Mosquitto brocker και Zigbee2MQTT στο αντίγραφο ασφαλείας αν υπάρχουν. Στη συνέχεια, η υπηρεσία προσθέτει το αρχείο στο IPFS και αποθηκεύει το αποτέλεσμα CID στο Robonomics Digital Twin.**
## Δημιουργία Αντιγράφου Ασφαλείας της Διαμόρφωσης του Home Assistant

Η δημιουργία ενός αντιγράφου ασφαλείας σάς επιτρέπει να ανακτήσετε εύκολα τη διαμόρφωση του Home Assistant σας σε περίπτωση αποτυχίας.

{% roboWikiVideo {videos:[{src: 'QmZN5LfWR4XwAiZ3jEcw7xbCnT81NsF5XE3XFaNhMm5ba1', type: 'mp4'}], attrs:['loop', 'controls', 'autoplay']} %}{% endroboWikiVideo %}

{% roboWikiNote {type: "warning", title: "ΠΡΟΕΙΔΟΠΟΙΗΣΗ"}%}Για να δημιουργήσετε αντίγραφο ασφαλείας και να ανακτήσετε τη διαμόρφωσή σας, είναι απαραίτητο να χρησιμοποιήσετε ένα **προσαρμοσμένο πύλη IPFS** όπως το Pinata. Χωρίς αυτό, το αντίγραφό σας θα αποθηκευτεί μόνο στον τοπικό κόμβο IPFS σας, πράγμα που μπορεί να σας εμποδίσει να ανακτήσετε τη διαμόρφωση του Home Assistant σας σε περίπτωση αποτυχίας του τοπικού κόμβου.
{% endroboWikiNote %}

1. Στη διαδικτυακή διεπαφή του Home Assistant, μεταβείτε σε `Εργαλεία Προγραμματιστή` -> `Υπηρεσίες`. Αναζητήστε το `Robonomics: Αποθήκευση Αντιγράφου Ασφαλείας στο Robonomics` και πατήστε `ΚΛΗΣΗ ΥΠΗΡΕΣΙΑΣ`.

2. Περιμένετε μέχρι να εμφανιστεί η ειδοποίηση `Το αντίγραφο ασφαλείας ενημερώθηκε στο Robonomics` στις `Ειδοποιήσεις`.


{% roboWikiNote {type: "warning", title: "ΠΡΟΕΙΔΟΠΟΙΗΣΗ"}%} Μην προσπαθήσετε να δημιουργήσετε ένα αντίγραφο ασφαλείας ή να ανακτήσετε τη διαμόρφωση αμέσως μετά τη φόρτωση του Home Assistant και της Ενσωμάτωσης Robonomics. Παρακαλώ **περιμένετε περίπου 5 λεπτά** για να ολοκληρωθεί η αρχική εγκατάσταση. {% endroboWikiNote %}

Παράμετροι υπηρεσίας:
- **Πλήρες Αντίγραφο** (προεπιλογή: Ψευδές) - προσθέστε τη βάση δεδομένων στο αντίγραφο ασφαλείας, έτσι ώστε να αποθηκεύονται και οι ιστορικοί καταστάσεις των οντοτήτων.
- **Διαδρομή προς το αρχείο κωδικού πρόσβασης mosquitto** (προεπιλογή: `/etc/mosquitto`) - Εάν χρησιμοποιήσατε τις μεθόδους εγκατάστασης Home Assistant Core ή Docker και δεν έχετε την προεπιλεγμένη διαδρομή για το Mosquitto broker, θα πρέπει να αλλάξετε αυτήν την παράμετρο. *Δεν απαιτείται για το Home Assistant OS ή το Superviser*.

## Επαναφορά της διαμόρφωσης του Home Assistant από αντίγραφο ασφαλείας

Για να επαναφέρετε τη διαμόρφωσή σας, θα χρειαστείτε ένα εγκατεστημένο Home Assistant και Robonomics Integration.

{% roboWikiVideo {videos:[{src: 'QmNcJpHWWuZzwNCQryTw5kcki49oNTjEb8xvnfffSYfRVa', type: 'mp4'}], attrs:['loop', 'controls', 'autoplay']} %}{% endroboWikiVideo %}

{% roboWikiNote {type: "warning"}%}Για να εξασφαλίσετε την επιτυχή ανάκτηση της διαμόρφωσής σας στις μεθόδους εγκατάστασης Home Assistant Core και Docker, πρέπει να εκτελέσετε επιπλέον βήματα ρύθμισης όπως περιγράφεται στο τέλος της σελίδας.
{% endroboWikiNote %}

1. Εγκαταστήστε το Home Assistant με την Robonomics Integration (εάν δεν έχει εγκατασταθεί ακόμα), ακολουθώντας τα βήματα από το άρθρο για την [επιθυμητή μέθοδο εγκατάστασης](https://wiki.robonomics.network/docs/robonomics-smart-home-overview/#start-here-your-smart-home).

2. [Ρυθμίστε την Robonomics Integration](https://wiki.robonomics.network/docs/robonomics-hass-integration) χρησιμοποιώντας **τους ίδιους καρπούς** που χρησιμοποιήσατε στην προηγούμενη διαμόρφωση Robonomics. Εάν η συνδρομή σας έχει λήξει, [επανενεργοποιήστε την](https://wiki.robonomics.network/docs/sub-activate).

3. Στην ιστοσελίδα του Home Assistant μεταβείτε σε `Εργαλεία Προγραμματιστή` -> `Υπηρεσίες`. Αναζητήστε το `Robonomics: Επαναφορά από το Αντίγραφο Ασφαλείας στο Robonomics` και πατήστε `ΚΛΗΣΗ ΥΠΗΡΕΣΙΑΣ`. Μεταβείτε στη σελίδα `Επισκόπηση`, για να ελέγξετε την κατάσταση του αντιγράφου ασφαλείας σας.

4. Μετά την επαναφορά, το Home Assistant θα επανεκκινήσει αυτόματα. Εάν για κάποιο λόγο το Home Assistant δεν επανεκκινήθηκε, μπορείτε να ελέγξετε την κατάσταση της ανάκτησης παρακολουθώντας την κατάσταση του οντότητας `robonomics.backup`. Εάν η κατάσταση είναι `επαναφέρθηκε`, θα πρέπει να επανεκκινήσετε χειροκίνητα το Home Assistant μεταβαίνοντας στις `Ρυθμίσεις` > `Σύστημα` και κάνοντας κλικ στο κουμπί `ΕΠΑΝΕΚΚΙΝΗΣΗ` που βρίσκεται στην πάνω δεξιά γωνία.

5. Εάν το αντίγραφο ασφαλείας σας περιλαμβάνει τη διαμόρφωση Zigbee2MQTT ή Mosquitto, θα πρέπει να επανεκκινήσετε αυτές τις υπηρεσίες για να ενεργοποιήσετε τη νέα διαμόρφωση. Μπορείτε να το κάνετεΜπορείτε να επανεκκινήσετε τις υπηρεσίες μεμονωμένα με το χέρι, ή απλά να επανεκκινήσετε τον υπολογιστή Home Assistant για να διασφαλίσετε ότι όλες οι υπηρεσίες επανεκκινούν.

Ορίσματα υπηρεσίας:
- **Διαδρομή προς το αρχείο κωδικού πρόσβασης mosquitto** (προεπιλογή: `/etc/mosquitto`) - Αν χρησιμοποιήσατε τις μεθόδους εγκατάστασης Home Assistant Core ή Docker και δεν έχετε την προεπιλεγμένη διαδρομή για το Mosquitto broker, πρέπει να αλλάξετε αυτήν την παράμετρο. *Δεν απαιτείται για το Home Assistant OS ή το Superviser*.
- **Διαδρομή προς το Zigbee2MQTT config** (προεπιλογή: `/opt/zigbee2mqtt`) - Αν χρησιμοποιήσατε τις μεθόδους εγκατάστασης Home Assistant Core ή Docker και δεν έχετε την προεπιλεγμένη διαδρομή για το Zigbee2MQTT, πρέπει να αλλάξετε αυτήν την παράμετρο. *Δεν απαιτείται για το Home Assistant OS ή το Superviser*.

## Επαναφορά της Διαμόρφωσης Mosquitto και Zigbee2MQTT για τη Μέθοδο Εγκατάστασης Home Assistant Core

Αν η δημιουργία αντιγράφων ασφαλείας περιλαμβάνει τη διαμόρφωση για το Mosquitto ή το Zigbee2MQTT, κατά τη διαδικασία επαναφοράς, θα τοποθετηθούν στην προεπιλεγμένη διαδρομή ή στη διαδρομή που καθορίζεται στα ορίσματα. Ωστόσο, αν εγκαταστήσατε την ενσωμάτωση Robonomics σε μια υπάρχουσα εγκατάσταση Home Assistant Core *(όχι από την προεγκατεστημένη εικόνα Robonomics)*, ο χρήστης `homeassistant` ενδέχεται να μην έχει πρόσβαση σε αυτήν τη διαδρομή.

Έτσι, για να επαναφέρετε τη διαμόρφωση του Mosquitto και του Zigbee2MQTT, πρέπει να χορηγήσετε τις απαραίτητες άδειες ανάγνωσης στον χρήστη `homeassistant`:

```bash
sudo chmod a+w /opt/zigbee2mqtt /etc/mosquitto
```

## Δημιουργία Αντιγράφων Ασφαλείας της Διαμόρφωσης Mosquitto και Zigbee2MQTT για τη Μέθοδο Εγκατάστασης Home Assistant Docker

Για να δημιουργήσετε αντίγραφα ασφαλείας των διαμορφώσεων Mosquitto και Zigbee2MQTT από ένα δοχείο Docker, πρέπει να δημιουργήσετε όγκους για τις αντίστοιχες διαμορφώσεις τους. Αυτό μπορεί να επιτευχθεί εκτελώντας το δοχείο Home Assistant σας με επιπλέον ορίσματα:

```bash
docker run -d \
  --name homeassistant \
  --privileged \
  --restart=unless-stopped \
  -e TZ=MY_TIME_ZONE \
  -v /PATH_TO_YOUR_CONFIG:/config \
  -v /etc/mosquitto:/etc/mosquitto \
  -v /etc/mosquitto:/opt/zigbee2mqtt \
  --network=host \
  ghcr.io/home-assistant/home-assistant:stable
```

ή να κάνετε αλλαγές στο αρχείο `compose.yaml`:

```yaml
version: '3'
services:
  homeassistant:
    container_name: homeassistant
```    εικόνα: "ghcr.io/home-assistant/home-assistant:stable"
    όγκοι:
      - /ΔΙΑΔΡΟΜΗ_ΠΡΟΣ_ΤΗΔΕ_ΤΗΔΕ:/config
      - /etc/localtime:/etc/localtime:ro
      - /etc/mosquitto:/etc/mosquitto
      - /etc/mosquitto:/opt/zigbee2mqtt
    επανεκκίνηση: εκτός αν διακόπτεται
    προνομιούχο: true
    network_mode: host
```

{% roboWikiNote {type: "note", title:"Σημείωση"}%}Παρακαλούμε να σημειώσετε ότι οι προεπιλεγμένες διαδρομές για τις ρυθμίσεις του Mosquitto και του Zigbee2MQTT είναι αντίστοιχα `/etc/mosquitto` και `/opt/zigbee2mqtt`. Ωστόσο, αυτές οι διαδρομές μπορεί να ποικίλουν ανάλογα με τη συγκεκριμένη ρύθμιση σας.
{% endroboWikiNote %}

## Κουμπιά Αντιγράφων Ασφαλείας

Εκτός από τη χρήση υπηρεσιών για τη δουλειά με αντίγραφα ασφαλείας, μπορείτε να απλοποιήσετε τη διαδικασία χρησιμοποιώντας τα κουμπιά `button.create_backup` και `button.restore_from_backup` από την ενσωμάτωση Robonomics. Αυτά τα κουμπιά ενεργοποιούν τις αντίστοιχες υπηρεσίες με προεπιλεγμένες παραμέτρους (το κουμπί αντιγράφου δημιουργεί ένα αντίγραφο ασφαλείας χωρίς ιστορικό).

{% roboWikiVideo {videos:[{src: 'Qmc1fexYaJMsK6ch6JhjL6aqnAwqYNAzo5nEwYgDpnp4gj', type: 'mp4'}], attrs:['loop', 'controls', 'autoplay']} %}{% endroboWikiVideo %}

Για να προσθέσετε κουμπιά στον πίνακα ελέγχου σας, ακολουθήστε αυτά τα βήματα:

1. Κάντε κλικ στα τρία τελείες στην επάνω δεξιά γωνία του πίνακα ελέγχου.
2. Επιλέξτε `Επεξεργασία Πίνακα Ελέγχου`.
3. Κάντε κλικ στο κουμπί `Προσθήκη Κάρτας` στην κάτω δεξιά γωνία.
4. Επιλέξτε την κάρτα `Οντότητες`.
5. Στο πεδίο `Οντότητες`, αναζητήστε τις οντότητες button.create_backup και button.restore_from_backup.
6. Πατήστε `Αποθήκευση` για να προσθέσετε τις οντότητες στην κάρτα.
7. Ολοκληρώστε την επεξεργασία κάνοντας κλικ στο κουμπί `Ολοκληρώθηκε` στην επάνω δεξιά γωνία.