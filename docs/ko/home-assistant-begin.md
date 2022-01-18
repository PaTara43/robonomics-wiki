---
title: Robonomics Smart Home
contributors: [LoSk-p, dergudzon, Leemo94]
translated: false
---
There are instructions on how to connect your smart home devices to the Robonomics network through a Home Assistant. There will be two methods which will be explained to help you connect your device to a Raspberry Pi; via a zigbee2MQTT adapter, or through Xiaomi Gateway.

In this video you can see the example of connecting temperature sensor:

https://youtu.be/iB2Z8HtERgs

# Requirements

* Raspberry Pi 4 or 3
* SD card and SD adapter
* Temperature sensor - [Keen Home RS-THP-MP-1.0](https://www.zigbee2mqtt.io/devices/RS-THP-MP-1.0.html) (or another [supported device](https://www.zigbee2mqtt.io/information/supported_devices.html))

### Method 1 (with zigbee2MQTT)
* Zigbee adapter [JetHome USB JetStick Z2](https://jhome.ru/catalog/parts/PCBA/293/) (or one of [supported](https://www.zigbee2mqtt.io/information/supported_adapters.html))

### Method 2 (with Xiaomi Gateway)
* Xiaomi Gateway (one of [supported](https://www.home-assistant.io/integrations/xiaomi_miio#xiaomi-gateway))
* [Mi Home app](https://play.google.com/store/apps/details?id=com.xiaomi.smarthome&hl=ru&gl=US) or HomeKit app

Also you can connect some devices directly through Mi Home app (for example, Vacuum Cleaner).

# Setup

1. First you need to [setup Raspberry Pi](/docs/raspberry_setup/) (also you can [use prepared image](/docs/raspberry_image/)).
2. Then you need to connect devices:
- [Connection with zigbee2MQTT](/docs/zigbee2MQTT/)
- [Connection through Xiaomi Gateway](/docs/xiaomi_gateway/)
- [Connect Vacuum Cleaner](/docs/vacuum_connect/)