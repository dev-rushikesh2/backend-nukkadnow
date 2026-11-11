# Containers Architecture

Each microservice is packaged as an independent OCI container image using multi-stage Docker builds.
Images run as non-root users (`nestjs`) on Alpine Linux with minimal footprint.
Local orchestration is managed via Docker Compose, while production targets container hosting or Kubernetes.
