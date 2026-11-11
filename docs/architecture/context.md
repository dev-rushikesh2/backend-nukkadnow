# System Context & C4 Architecture

NukkadNow connects hyper-local consumers with neighborhood merchants (kirana stores, home chefs, bakers, makers) through order-ahead, time-slot pickup, and merchant-managed delivery.

```mermaid
flowchart TD
    User([Customer]) -->|HTTPS / PWA| CDN[CDN & WAF]
    MerchantUser([Merchant Staff]) -->|HTTPS / Web| CDN
    AdminUser([Super Admin]) -->|HTTPS / Restricted| CDN

    CDN --> Gateway[API Gateway / BFF :4000]

    Gateway --> Identity[Identity Service :4001]
    Gateway --> Merchant[Merchant Service :4002]
    Gateway --> Catalog[Catalog Service :4003]
    Gateway --> Discovery[Discovery Service :4004]
    Gateway --> Order[Order Service :4005]
    Gateway --> Fulfillment[Fulfillment Service :4006]
    Gateway --> Payment[Payment Service :4007]
    Gateway --> Subscription[Subscription Service :4008]

    Order --> Broker[(RabbitMQ Event Broker)]
    Payment --> Broker
    Fulfillment --> Broker
    Catalog --> Broker

    Broker --> Notification[Notification Service :4009]
    Broker --> Analytics[Analytics Service :4011]
```
