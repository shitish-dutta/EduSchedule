# IntelliScheduler - AI-Powered Academic Timetable Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![made-for-sih](https://img.shields.io/badge/Made%20for-SIH%202024-blue.svg)](https://www.sih.gov.in/)
[![Python](https://img.shields.io/badge/Python-3.9%2B-blue.svg)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB.svg?logo=react)](https://reactjs.org/)

**From Chaos to Clarity: Optimizing Academic Timetables with AI.**

IntelliScheduler is an intelligent web platform designed to solve the complex challenge of class scheduling in higher education institutions. Developed for the **Smart India Hackathon 2024**, this project automates and optimizes the creation of timetables, ensuring efficient use of resources and eliminating conflicts.

![Dashboard Screenshot](https://i.imgur.com/your-screenshot-link.png) 
## 📋 Table of Contents

- [The Problem](#-the-problem)
- [Our Solution](#-our-solution)
- [🚀 Key Features](#-key-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🏗️ System Architecture](#️-system-architecture)
- [⚙️ Getting Started](#️-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#-usage)
- [👥 Team Members](#-team-members)
- [📜 License](#-license)

## 📌 The Problem

Higher Education institutions often struggle with manual timetable preparation. This process is time-consuming, prone to errors, and leads to frequent clashes, underutilized classrooms, and uneven workload distribution. With the adoption of multidisciplinary curricula under NEP 2020, this complexity has only increased, making a robust, intelligent solution more critical than ever.

## ✨ Our Solution

IntelliScheduler is a web-based platform that uses a **Genetic Algorithm** to generate fully optimized, clash-free timetables. It considers a multitude of constraints including faculty availability, room capacity, subject requirements, and student batches. The system provides administrators with multiple optimized options, a real-time conflict detection editor, and actionable suggestions, transforming a week-long manual task into a simple, one-click process.

## 🚀 Key Features

* **🧠 Intelligent Optimization Core:** Utilizes a Genetic Algorithm to find the best-fit schedule by evaluating millions of possibilities against hard and soft constraints.
* **✅ Real-time Conflict Resolution:** A drag-and-drop interface for manual adjustments that instantly validates moves and flags any potential clashes.
* **💡 AI-Powered Suggestions:** When a perfect solution isn't possible, the system provides actionable recommendations to resolve bottlenecks.
* **📊 Multiple Timetable Options:** Generates the top 3-5 optimized timetables, allowing administrators to choose the one that best fits their needs.
* **🗂️ Centralized Data Management:** Easy-to-use forms and CSV/Excel uploads for managing faculty, rooms, subjects, and batches.
* **🏢 Multi-Department & Multi-Shift Ready:** Designed to handle the complexities of large institutions with various departments and scheduling shifts.
* **🔒 Secure & Role-Based Access:** A secure login system for authorized personnel to create and manage schedules.

## 🛠️ Technology Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React.js, Material-UI |
| **Backend** | Python, Django REST Framework |
| **Database** | PostgreSQL |
| **Optimization Core** | DEAP (Python Library for Evolutionary Computation) |
| **Deployment** | Docker, AWS / Google Cloud |

## 🏗️ System Architecture

Our platform is built on a robust, scalable architecture that separates the frontend, backend, and the core optimization engine for maintainability and performance.

```mermaid
graph TD
    A[Frontend: React.js] -- REST API --> B[Backend: Django];
    B -- Manages/Validates --> C[Database: PostgreSQL];
    B -- Triggers & Provides Data --> D[Optimization Engine: Genetic Algorithm Core];
    D -- Returns Optimized Timetables --> B;

    subgraph User Interface
        A
    end

    subgraph Server-Side
        B
        D
    end

    subgraph Data Store
        C
    end

    style A fill:#61DAFB,stroke:#333,stroke-width:2px
    style B fill:#092E20,stroke:#333,stroke-width:2px,color:#fff
    style C fill:#336791,stroke:#333,stroke-width:2px,color:#fff
    style D fill:#f9a825,stroke:#333,stroke-width:2px
