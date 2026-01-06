/**
 * Decision Referee - Rule Definitions
 * 
 * ═══════════════════════════════════════════════════════════════
 * THIS FILE CONTAINS ALL DECISION RULES AS PLAIN, DECLARATIVE OBJECTS.
 * RULES ARE HUMAN-READABLE WITHOUT RUNNING THE APPLICATION.
 * ═══════════════════════════════════════════════════════════════
 * 
 * RULE FORMAT:
 * - id: Unique identifier for traceability
 * - description: Human explanation of the rule's reasoning
 * - when: Constraint conditions that trigger this rule (partial match)
 * - impacts: Effects on REST, GraphQL, and/or gRPC when triggered
 * 
 * LANGUAGE DISCIPLINE:
 * - All text uses conditional language ("may", "can", "under these constraints")
 * - No absolutes ("always", "best", "optimal")
 * - No recommendations ("choose", "should", "prefer")
 * - No scores, weights, or rankings
 * 
 * TOTAL RULES: 26
 */

/** @type {import('./types').DecisionRule[]} */
export const rules = [

  // ════════════════════════════════════════════════════════════
  // SECTION 1: EXPERTISE-BASED RULES (Single Constraint)
  // ════════════════════════════════════════════════════════════

  {
    id: "EXP_BEGINNER_REST",
    description: "Beginner teams benefit from REST's familiar patterns",
    when: { expertise: "beginner" },
    impacts: {
      rest: {
        strengths: [
          "With beginner expertise, REST's familiar HTTP patterns may reduce onboarding friction",
          "Under limited experience, widespread documentation can accelerate problem resolution"
        ]
      }
    }
  },

  {
    id: "EXP_BEGINNER_GRAPHQL",
    description: "Beginner teams face GraphQL complexity challenges",
    when: { expertise: "beginner" },
    impacts: {
      graphql: {
        weaknesses: [
          "With beginner expertise, schema design complexity may overwhelm the team",
          "Under limited experience, N+1 query problems often go undetected until production"
        ]
      }
    }
  },

  {
    id: "EXP_BEGINNER_GRPC",
    description: "Beginner teams face gRPC tooling barriers",
    when: { expertise: "beginner" },
    impacts: {
      grpc: {
        weaknesses: [
          "With beginner expertise, Protocol Buffer syntax creates steep learning barriers",
          "Under limited experience, binary debugging requires specialized tools the team may lack"
        ]
      }
    }
  },

  {
    id: "EXP_INTERMEDIATE_ALL",
    description: "Intermediate teams can leverage moderate complexity",
    when: { expertise: "intermediate" },
    impacts: {
      rest: {
        strengths: [
          "For intermediate teams, REST allows focus on business logic over protocol complexity"
        ]
      },
      graphql: {
        strengths: [
          "For intermediate teams, GraphQL's type system can catch errors before runtime"
        ],
        weaknesses: [
          "At intermediate level, query cost analysis may require additional learning investment"
        ]
      },
      grpc: {
        strengths: [
          "For intermediate teams, code generation can reduce manual serialization errors"
        ]
      }
    }
  },

  {
    id: "EXP_EXPERT_REST",
    description: "Expert teams may find REST limiting",
    when: { expertise: "expert" },
    impacts: {
      rest: {
        weaknesses: [
          "For expert teams, REST's simplicity may limit fine-grained optimization opportunities"
        ]
      }
    }
  },

  {
    id: "EXP_EXPERT_GRAPHQL",
    description: "Expert teams can leverage advanced GraphQL patterns",
    when: { expertise: "expert" },
    impacts: {
      graphql: {
        strengths: [
          "With expert teams, federation patterns enable sophisticated service composition",
          "Under expert guidance, query complexity controls can be tuned precisely"
        ]
      }
    }
  },

  {
    id: "EXP_EXPERT_GRPC",
    description: "Expert teams can maximize gRPC performance",
    when: { expertise: "expert" },
    impacts: {
      grpc: {
        strengths: [
          "With expert teams, bidirectional streaming unlocks real-time communication patterns",
          "Under expert operation, binary protocol efficiency can be maximized"
        ]
      }
    }
  },

  // ════════════════════════════════════════════════════════════
  // SECTION 2: SCALE-BASED RULES (Single Constraint)
  // ════════════════════════════════════════════════════════════

  {
    id: "SCALE_SMALL_REST",
    description: "Small scale favors REST's minimal overhead",
    when: { scale: "small" },
    impacts: {
      rest: {
        strengths: [
          "At small scale, REST's minimal infrastructure overhead keeps operational costs low"
        ]
      }
    }
  },

  {
    id: "SCALE_SMALL_GRAPHQL",
    description: "Small scale may not justify GraphQL overhead",
    when: { scale: "small" },
    impacts: {
      graphql: {
        weaknesses: [
          "At small scale, schema overhead may not justify the flexibility benefits"
        ]
      }
    }
  },

  {
    id: "SCALE_SMALL_GRPC",
    description: "Small scale may not justify gRPC investment",
    when: { scale: "small" },
    impacts: {
      grpc: {
        weaknesses: [
          "At small scale, infrastructure investment may exceed performance benefits"
        ]
      }
    }
  },

  {
    id: "SCALE_MEDIUM_ALL",
    description: "Medium scale allows balanced trade-offs",
    when: { scale: "medium" },
    impacts: {
      rest: {
        strengths: [
          "At medium scale, REST's caching layers can provide effective performance gains"
        ]
      },
      graphql: {
        strengths: [
          "At medium scale, reduced over-fetching can provide measurable bandwidth savings"
        ]
      },
      grpc: {
        strengths: [
          "At medium scale, strong typing can prevent contract drift between services"
        ]
      }
    }
  },

  {
    id: "SCALE_LARGE_REST",
    description: "Large scale exposes REST inefficiencies",
    when: { scale: "large" },
    impacts: {
      rest: {
        weaknesses: [
          "At large scale, multiple round-trips may create network bottlenecks",
          "Under high throughput, over-fetching can compound bandwidth costs"
        ]
      }
    }
  },

  {
    id: "SCALE_LARGE_GRAPHQL",
    description: "Large scale amplifies GraphQL benefits and risks",
    when: { scale: "large" },
    impacts: {
      graphql: {
        strengths: [
          "At large scale, client-specified queries can reduce payload sizes significantly"
        ],
        weaknesses: [
          "Under high load, unbounded query depth can trigger cascading failures"
        ]
      }
    }
  },

  {
    id: "SCALE_LARGE_GRPC",
    description: "Large scale favors gRPC performance",
    when: { scale: "large" },
    impacts: {
      grpc: {
        strengths: [
          "At large scale, binary serialization can dramatically reduce latency",
          "Under high throughput, HTTP/2 multiplexing eliminates connection overhead"
        ]
      }
    }
  },

  // ════════════════════════════════════════════════════════════
  // SECTION 3: TIME-TO-MARKET RULES (Single Constraint)
  // ════════════════════════════════════════════════════════════

  {
    id: "TIME_FAST_REST",
    description: "Fast delivery favors REST's rapid prototyping",
    when: { timeToMarket: "fast" },
    impacts: {
      rest: {
        strengths: [
          "Under fast delivery pressure, REST enables rapid prototyping with familiar tooling",
          "With tight timelines, no schema setup can accelerate initial deployment"
        ]
      }
    }
  },

  {
    id: "TIME_FAST_GRAPHQL",
    description: "Fast delivery conflicts with GraphQL setup",
    when: { timeToMarket: "fast" },
    impacts: {
      graphql: {
        weaknesses: [
          "Under fast delivery pressure, upfront schema design may delay initial release",
          "With tight timelines, schema iteration costs can compound quickly"
        ]
      }
    }
  },

  {
    id: "TIME_FAST_GRPC",
    description: "Fast delivery conflicts with gRPC setup",
    when: { timeToMarket: "fast" },
    impacts: {
      grpc: {
        weaknesses: [
          "Under fast delivery pressure, toolchain setup may delay initial deployment",
          "With tight timelines, proto file iteration can slow development cycles"
        ]
      }
    }
  },

  {
    id: "TIME_BALANCED_ALL",
    description: "Balanced timelines allow schema-first benefits",
    when: { timeToMarket: "balanced" },
    impacts: {
      rest: {
        weaknesses: [
          "With balanced timelines, lack of schema may create integration debt later"
        ]
      },
      graphql: {
        strengths: [
          "With balanced timelines, schema-first design can prevent downstream integration issues"
        ]
      },
      grpc: {
        strengths: [
          "With balanced timelines, contract-first design can ensure stable service boundaries"
        ]
      }
    }
  },

  // ════════════════════════════════════════════════════════════
  // SECTION 4: RISK TOLERANCE RULES (Single Constraint)
  // ════════════════════════════════════════════════════════════

  {
    id: "RISK_LOW_REST",
    description: "Low risk tolerance favors REST's maturity",
    when: { riskTolerance: "low" },
    impacts: {
      rest: {
        strengths: [
          "With low risk tolerance, REST's mature ecosystem can minimize operational surprises"
        ]
      }
    }
  },

  {
    id: "RISK_LOW_GRAPHQL",
    description: "Low risk tolerance conflicts with GraphQL's newer patterns",
    when: { riskTolerance: "low" },
    impacts: {
      graphql: {
        weaknesses: [
          "With low risk tolerance, newer operational patterns may introduce uncertainty"
        ]
      }
    }
  },

  {
    id: "RISK_LOW_GRPC",
    description: "Low risk tolerance has mixed gRPC implications",
    when: { riskTolerance: "low" },
    impacts: {
      grpc: {
        strengths: [
          "With low risk tolerance, strong typing can catch errors at compile time"
        ],
        weaknesses: [
          "Under low risk appetite, limited browser support may narrow deployment options"
        ]
      }
    }
  },

  {
    id: "RISK_HIGH_ALL",
    description: "High risk tolerance enables aggressive optimization",
    when: { riskTolerance: "high" },
    impacts: {
      rest: {
        weaknesses: [
          "With high risk tolerance, REST's conservative patterns may miss optimization potential"
        ]
      },
      graphql: {
        strengths: [
          "With high risk tolerance, rapid schema evolution can enable aggressive iteration"
        ]
      },
      grpc: {
        strengths: [
          "With high risk tolerance, performance gains may justify infrastructure complexity"
        ]
      }
    }
  },

  // ════════════════════════════════════════════════════════════
  // SECTION 5: COMPOUND RULES (Multiple Constraints)
  // ════════════════════════════════════════════════════════════

  {
    id: "COMPOUND_FAST_LOW_RISK",
    description: "Fast delivery with low risk tolerance favors mature tooling",
    when: { timeToMarket: "fast", riskTolerance: "low" },
    impacts: {
      rest: {
        strengths: [
          "Under fast delivery with low risk, REST's predictability can reduce delivery uncertainty"
        ],
        tradeoffs: [
          "Delivery speed and risk mitigation achieved, but data fetching flexibility constrained"
        ]
      }
    }
  },

  {
    id: "COMPOUND_LARGE_BEGINNER",
    description: "Large scale with beginner expertise increases operational risk",
    when: { scale: "large", expertise: "beginner" },
    impacts: {
      graphql: {
        weaknesses: [
          "At large scale with beginner teams, query optimization complexity becomes high-risk"
        ],
        tradeoffs: [
          "Flexibility potential exists, but team capability gap creates significant delivery risk"
        ]
      },
      grpc: {
        weaknesses: [
          "At large scale with beginner teams, operational complexity may overwhelm the team"
        ],
        tradeoffs: [
          "Performance potential exists, but expertise gap creates operational risk"
        ]
      }
    }
  },

  {
    id: "COMPOUND_LARGE_EXPERT",
    description: "Large scale with expert expertise enables advanced patterns",
    when: { scale: "large", expertise: "expert" },
    impacts: {
      graphql: {
        strengths: [
          "At large scale with expert teams, query cost analysis can be implemented effectively"
        ],
        tradeoffs: [
          "Maximum flexibility achieved, but requires sustained investment in query governance"
        ]
      },
      grpc: {
        strengths: [
          "At large scale with expert teams, streaming patterns can maximize throughput"
        ],
        tradeoffs: [
          "Maximum performance achieved, but ecosystem accessibility permanently constrained"
        ]
      }
    }
  },

  {
    id: "COMPOUND_BEGINNER_FAST",
    description: "Beginner team with fast delivery needs simplicity",
    when: { expertise: "beginner", timeToMarket: "fast" },
    impacts: {
      rest: {
        strengths: [
          "For beginner teams under time pressure, REST's familiarity can accelerate delivery"
        ]
      },
      graphql: {
        tradeoffs: [
          "Long-term flexibility traded against immediate delivery capability"
        ]
      },
      grpc: {
        tradeoffs: [
          "Performance potential sacrificed for achievable delivery timeline"
        ]
      }
    }
  }

];

/**
 * Total number of rules in the system.
 * @type {number}
 */
export const RULE_COUNT = rules.length;
