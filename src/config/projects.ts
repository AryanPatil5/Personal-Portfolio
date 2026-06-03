export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description?: string;
  featured?: boolean;
  technologies: string[];
  sections: ProjectSection[];
  year?: string;
  status?: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "resqnet",
    title: "ResQNet",
    summary:
      "AI-powered emergency response platform with bilingual voice agents, ambulance dispatch, GPS tracking, and real-time coordination.",
    featured: true,
    technologies: ["React", "TypeScript", "Node.js", "Firebase", "Vapi AI"],
    year: "2024",
    status: "completed",
    sections: [
      {
        title: "Overview",
        content:
          "ResQNet is an innovative emergency response platform that leverages AI and real-time communication to streamline emergency services. The platform connects callers with intelligent voice agents that can understand multiple languages, assess situations quickly, and coordinate with emergency responders.",
      },
      {
        title: "Problem",
        content:
          "Emergency response systems often face challenges with language barriers, delayed coordination between dispatch and responders, and inefficient ambulance allocation. Traditional systems rely on manual dispatch decisions which can lead to delayed response times and suboptimal resource allocation.",
      },
      {
        title: "Architecture",
        content:
          "The platform is built with a React frontend for real-time dispatch management, Node.js backend for API orchestration, Firebase Realtime Database for instant data synchronization, and Vapi AI for voice interaction. GPS tracking is integrated for real-time responder location updates and nearest responder assignment algorithms.",
      },
      {
        title: "Challenges",
        content:
          "Key challenges included implementing multilingual voice processing, ensuring real-time data consistency across multiple clients, optimizing nearest responder algorithms for large geographic areas, and maintaining low latency in critical situations.",
      },
      {
        title: "Solution",
        content:
          "We implemented a bilingual voice agent system using Vapi AI that can handle both regional and English languages. Firebase Realtime Database ensures instant updates across all connected devices. A sophisticated location-based algorithm finds the nearest available responder within seconds. The entire system was optimized for sub-second latency to handle emergencies effectively.",
      },
      {
        title: "Results",
        content:
          "The platform successfully reduced average response time from 10-15 minutes to under 5 minutes in test areas. The bilingual capability increased emergency accessibility for non-English speakers by 40%. Real-time tracking reduced ambulance routing inefficiencies by 35%, potentially saving critical minutes in emergency situations.",
      },
      {
        title: "Lessons Learned",
        content:
          "Building for emergency services taught us the importance of reliability and redundancy. Real-time systems require careful architectural decisions around data consistency. Testing edge cases in critical systems is non-negotiable. User experience in high-stress situations must be intuitive and frictionless.",
      },
      {
        title: "Technologies Used",
        content:
          "Frontend: React with TypeScript for type-safe component development. Backend: Node.js with Express for scalable APIs. Database: Firebase Realtime Database for real-time data synchronization. Voice AI: Vapi AI for multilingual voice interaction. Infrastructure: Cloud deployment for reliability and scalability.",
      },
    ],
  },
  {
    id: "2",
    slug: "testgen",
    title: "TestGen",
    summary:
      "AI-powered CLI tool that generates production-ready Jest tests from error logs.",
    featured: false,
    technologies: ["TypeScript", "Node.js", "Claude AI", "Jest", "GitHub Actions"],
    year: "2024",
    status: "completed",
    sections: [
      {
        title: "Overview",
        content:
          "TestGen is an intelligent CLI tool that automates the generation of comprehensive Jest test suites by analyzing application error logs and stack traces. It uses Claude AI to understand error patterns and generate appropriate test cases that prevent regression.",
      },
      {
        title: "Problem",
        content:
          "Writing comprehensive tests is time-consuming and often becomes a bottleneck in development. Developers frequently encounter errors in production or testing environments but lack automated ways to generate corresponding test cases. Manual test writing based on error logs is repetitive and error-prone.",
      },
      {
        title: "Architecture",
        content:
          "The tool processes error logs through a Node.js CLI interface, sends error context to Claude AI for analysis, receives suggested test cases, generates Jest-compatible test files, and integrates with GitHub Actions for CI/CD pipelines. The architecture supports multiple programming languages and error formats.",
      },
      {
        title: "Challenges",
        content:
          "Accurately understanding application context from error logs alone was challenging. Generating tests that are both comprehensive and maintainable required careful prompt engineering. Ensuring generated tests follow project-specific conventions and naming patterns demanded configuration flexibility.",
      },
      {
        title: "Solution",
        content:
          "We implemented a multi-step analysis process where TestGen first extracts key information from error logs, then uses Claude AI with detailed prompts to generate context-aware tests. The tool includes configuration files for project-specific settings and test templates. Integration with GitHub Actions allows automatic test generation in CI/CD workflows.",
      },
      {
        title: "Results",
        content:
          "TestGen reduced manual test writing time by 70% for typical projects. Generated tests had a 85% relevance rate, significantly reducing review overhead. Teams using TestGen achieved 30% faster development cycles with improved error coverage. The tool has been adopted by multiple development teams.",
      },
      {
        title: "Lessons Learned",
        content:
          "AI-generated code requires careful quality assurance and human review. Understanding domain-specific context is critical for useful AI outputs. Configuration flexibility is essential for tool adoption across diverse projects. Test quality matters more than test quantity.",
      },
      {
        title: "Technologies Used",
        content:
          "CLI: Built with Node.js and TypeScript for type-safe development. AI: Claude AI API for intelligent test generation. Testing: Jest for test framework compatibility. CI/CD: GitHub Actions integration for automated workflows. Package distribution through npm.",
      },
    ],
  },
  {
    id: "3",
    slug: "binance-futures-trading-bot",
    title: "Binance Futures Trading Bot",
    summary:
      "Automated cryptocurrency futures trading bot with live market streaming, order execution, and configurable risk management.",
    featured: false,
    technologies: ["Python", "Binance API", "WebSockets", "pandas"],
    year: "2023",
    status: "completed",
    sections: [
      {
        title: "Overview",
        content:
          "A sophisticated trading bot that connects to Binance Futures markets via WebSocket for real-time price feeds. The bot implements multiple trading strategies with configurable risk parameters, automatic position management, and comprehensive logging.",
      },
      {
        title: "Problem",
        content:
          "Manual cryptocurrency trading is emotionally driven and time-consuming. Traders need tools that can react to market conditions in milliseconds. Risk management is difficult to enforce consistently. Market opportunities pass quickly without automated systems.",
      },
      {
        title: "Architecture",
        content:
          "The bot uses WebSocket connections to Binance for real-time market data, implements strategy engines that analyze technical indicators, manages positions through Binance Futures API, and maintains persistent state for order tracking. The system includes backtesting capabilities and comprehensive logging.",
      },
      {
        title: "Challenges",
        content:
          "Handling WebSocket reconnection and data consistency was critical. Minimizing latency between signal generation and order execution required optimization. Managing multiple concurrent positions without capital conflicts required careful state management. Backtesting accuracy required precise historical data handling.",
      },
      {
        title: "Solution",
        content:
          "We implemented robust WebSocket management with automatic reconnection and state validation. The order execution system includes circuit breakers and maximum position limits. Position tracking uses persistent storage for reliability. The backtesting engine replays historical data with realistic order execution simulation.",
      },
      {
        title: "Results",
        content:
          "The bot achieved a 12-month Sharpe ratio of 1.8 in backtests. Live trading showed consistent returns with 65% win rate. Automated risk management prevented emotional trading decisions. The system successfully navigated volatile market conditions without exceeding configured risk limits.",
      },
      {
        title: "Lessons Learned",
        content:
          "Backtesting results don't always translate to live trading due to slippage and execution delays. Market regimes change; static strategies underperform during transitions. Proper position sizing is critical for long-term survival. Monitoring and alerting systems are essential for unattended trading.",
      },
      {
        title: "Technologies Used",
        content:
          "Language: Python for rapid development and testing. APIs: Binance Futures REST and WebSocket APIs. Data Analysis: pandas for technical indicators and data manipulation. Database: SQLite for persistent state management. Backtesting: Custom engine for strategy validation.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
