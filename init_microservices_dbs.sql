-- NukkadNow Microservices Databases Initialization
CREATE ROLE root WITH SUPERUSER LOGIN PASSWORD 'root';

CREATE DATABASE identity_db OWNER postgres;
CREATE DATABASE merchant_db OWNER postgres;
CREATE DATABASE catalog_db OWNER postgres;
CREATE DATABASE discovery_db OWNER postgres;
CREATE DATABASE order_db OWNER postgres;
CREATE DATABASE fulfillment_db OWNER postgres;
CREATE DATABASE payment_db OWNER postgres;
CREATE DATABASE subscription_db OWNER postgres;
CREATE DATABASE analytics_db OWNER postgres;

GRANT ALL PRIVILEGES ON DATABASE identity_db TO root;
GRANT ALL PRIVILEGES ON DATABASE merchant_db TO root;
GRANT ALL PRIVILEGES ON DATABASE catalog_db TO root;
GRANT ALL PRIVILEGES ON DATABASE discovery_db TO root;
GRANT ALL PRIVILEGES ON DATABASE order_db TO root;
GRANT ALL PRIVILEGES ON DATABASE fulfillment_db TO root;
GRANT ALL PRIVILEGES ON DATABASE payment_db TO root;
GRANT ALL PRIVILEGES ON DATABASE subscription_db TO root;
GRANT ALL PRIVILEGES ON DATABASE analytics_db TO root;
