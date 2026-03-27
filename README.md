# SmartFlow AI - Intelligent Traffic and Emergency Grid

Team: Commit and Conquer

India Innovates 2026 Hackathon - Urban Solutions

Live Demo - https://smart-flow-ai-intelligent-traffic-e.vercel.app/

## Executive Summary
SmartFlow AI is an AI-driven urban traffic orchestration platform that combines real-time computer vision, adaptive signal control, and emergency-first routing.

The system ingests live camera frames, detects and classifies vehicles, estimates road load, and updates signal strategy dynamically. During emergencies, SmartFlow AI activates a coordinated green corridor to reduce response time for ambulances and fire services.

## Problem
Most city intersections still run static timers and manual overrides. This creates three major issues:

1. Peak-hour congestion from non-adaptive signal cycles.
2. Delayed emergency vehicle movement through red-light corridors.
3. High fuel waste and emissions from stop-and-go traffic.

## Solution
SmartFlow AI provides a modular control loop:

1. Capture: live multi-camera intersection feed.
2. Perception: YOLO-based vehicle detection and road-wise counts.
3. Decision: adaptive timing logic based on density and priority rules.
4. Action: intelligent signal phase updates and emergency corridor preemption.
5. Visibility: unified dashboard for operators and stakeholders.

## Key Features
1. Real-time vehicle detection and counting from CCTV-compatible feeds.
2. Dynamic signal timing using live density metrics.
3. Emergency detection and corridor preemption logic.
4. 4-camera intersection monitoring with synchronized analytics.
5. Operational dashboard with live status and simulation views.

## Architecture
The platform is organized as:

1. Frontend (this repository): React + Vite + 3D traffic simulation UI.
2. Backend API: traffic orchestration, state, and decision endpoints.
3. Model service: FastAPI + YOLO inference pipeline.
4. Simulator module: traffic scenario playback and corridor behavior.

High-level flow:

1. Frontend submits camera frames to model service.
2. Model service returns detections and metrics.
3. Backend combines rules + metrics to compute signal actions.
4. Frontend visualizes lane state, camera state, and emergency routing.

## Tech Stack
Frontend:

1. React 19
2. Vite 7
3. TypeScript
4. React Three Fiber / Drei
5. Leaflet / React Leaflet
6. Tailwind CSS

AI and Vision (connected services):

1. Python
2. OpenCV
3. YOLO (Ultralytics)
4. FastAPI

Backend and Integrations (connected services):

1. Node.js
2. Express
3. Socket-based real-time updates

## Repository Scope
This repository contains the main frontend product experience and simulation interface.

Important folders:

1. src/components: UI modules and traffic simulation components.
2. src/context: shared simulation and app state.
3. src/pages: page-level views (traffic, dashboard, settings).
4. src/lib: API and utility integrations.

## Local Setup
Prerequisites:

1. Node.js 18+
2. npm 9+

Install and run:

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run serve
```

Type-check:

```bash
npm run typecheck
```

## Environment Configuration
Create .env from .env.example and set service URLs:

1. VITE_API_BASE_URL: backend API base URL.
2. VITE_SIMULATIONS_URL: simulation app URL.
3. VITE_AI_API_URL: model service URL (for example http://localhost:8000).
4. BASE_PATH: frontend base path.


## Expected Impact
Based on simulation and architecture goals:

1. Reduced average waiting time at intersections.
2. Faster emergency passage through coordinated signals.
3. Lower idle time, fuel burn, and emissions.
4. Better operator visibility through centralized monitoring.

## Why This Is Hackathon-Ready
1. Clear urban problem with measurable outcomes.
2. End-to-end demonstrable prototype.
3. Modular architecture that can scale intersection-by-intersection.
4. Uses existing camera infrastructure, improving deployability.

## Team
Commit and Conquer

1. Rupesh Varshney - B.Tech Computer Engineering
2. Austin Varshney - B.Tech Computer Engineering
3. Bhomik Varshney - B.Tech Computer Engineering
4. Aryan Parashar - B.Tech AI
5. Prakhar Saxena - B.Tech AI

Institution: Zakir Husain College of Engineering and Technology, Aligarh Muslim University

## References
1. YOLO / Ultralytics: https://github.com/ultralytics/ultralytics
2. OpenCV: https://opencv.org/
3. SUMO: https://www.eclipse.org/sumo/
4. Google Maps Platform: https://developers.google.com/maps
