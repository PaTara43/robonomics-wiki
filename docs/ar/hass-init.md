---
title: تهيئة مساعد المنزل
contributors: [nakata5321, PaTara43]
tools:
  - Home Assistant 2023.5.4
    https://github.com/home-assistant/core
---

**بعد تثبيت مساعد المنزل، يجب تهيئته.**

<robo-wiki-picture src="home-assistant/ha_init.png" />

أنت تبدأ بإنشاء حساب المالك لمساعد المنزل. هذا الحساب هو مسؤول ويمكنه إجراء أي تغييرات. افتح متصفح الويب وانتقل إلى `http://%RASPBERRY_IP_ADDRESS%:8123`. يمكنك العثور على عنوان IP لجهاز Raspberry Pi باستخدام [تطبيق Fing المحمول](https://www.fing.com/products) أو [أداة سطر الأوامر nmap](https://vitux.com/find-devices-connected-to-your-network-with-nmap/).

<robo-wiki-note type="note">قد يتغير عنوان Raspberry Pi مع مرور الوقت، بسبب إعدادات الموجه.</robo-wiki-note>

<robo-wiki-video autoplay loop controls :videos="[{src: 'https://cloudflare-ipfs.com/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

1. في الصفحة الأولى، أدخل اسمًا واسم مستخدم وكلمة مرور وانقر على زر `CREATE ACCOUNT`.

2. في الشاشة التالية، أدخل اسمًا لمنزلك وقم بتعيين موقعك ونظام الوحدات الخاص بك. انقر على `DETECT` للعثور على موقعك وتعيين المنطقة الزمنية ونظام الوحدات الخاص بك بناءً على ذلك الموقع. إذا كنت لا ترغب في إرسال موقعك، يمكنك ضبط هذه القيم يدويًا.

3. بعد ذلك، سيعرض مساعد المنزل أي أجهزة تم اكتشافها على شبكتك. لا تقلق إذا رأيت عددًا أقل من العناصر المعروضة أدناه؛ يمكنك دائمًا إضافة الأجهزة يدويًا لاحقًا. في الوقت الحالي، فقط انقر على `FINISH` وستكون في الشاشة الرئيسية لمساعد المنزل.

4. في النهاية، سترى واجهة مساعد المنزل على الويب، والتي ستعرض جميع أجهزتك. 


## حل المشاكل

1. إذا نسيت اسم المستخدم أو كلمة المرور الخاصة بك للمستخدم المحلي، [تحقق من هذه المقالة](https://www.home-assistant.io/docs/locked_out/) لاستعادة بيانات الاعتماد الخاصة بك.