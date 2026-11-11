module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["../../apps/*", "**/apps/**/src/**"],
            message: "Boundary Violation: Microservices cannot import another service internal sources. Use @nukkadnow/contracts or API clients."
          }
        ]
      }
    ]
  }
};
