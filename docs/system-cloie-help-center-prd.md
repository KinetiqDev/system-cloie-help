# System CLOIE Help Center PRD

**Product:** System CLOIE Help Center  
**Working name:** CLOIE Help  
**Subdomain:** `https://help.system-cloie.app`  
**Repository:** Separate repository from the main System CLOIE application  
**Primary audience:** System CLOIE end users  
**Document status:** Draft  
**Last updated:** 2026-10-04

---

## 1. Product summary

The System CLOIE Help Center is a user-facing guidance site for people who use System CLOIE and need a clear explanation of what a page, workflow, or action means.

The site is not developer documentation and is not a replacement for the technical documentation already maintained with the System CLOIE codebase. Its job is narrower: help a user complete a task, understand a workflow, recover when confused, and learn the responsibilities of the role they are currently using.

The Help Center will live at:

```text
https://help.system-cloie.app
```

The main System CLOIE application should link directly to the most relevant help page for the current role and route. A user who is confused while managing CILOs, completing an evaluation, reviewing analytics, or managing course assignments should not have to search a large manual from the beginning.

The Help Center will be built as a separate Astro site, preferably using Starlight for documentation structure, search, navigation, accessibility, and Markdown/MDX support.

Guide videos will be hosted on YouTube. The Help Center will link to or embed the relevant YouTube video where it improves a guide. The site will not host large video files itself.

---

## 2. Background

System CLOIE is a web-based academic evaluation and learning-outcome evidence system for Assumption College of Davao. Its current user model includes the following roles:

- Secretary
- College Dean
- General Education Coordinator
- Program Head
- Faculty Member
- Student
- Alumni
- Industry Partner

Graduating students are treated as eligible students for specific evaluation targeting and are not a separate System CLOIE role.

The roles do not have identical responsibilities. System CLOIE uses role-scoped workflows and role-owned route trees. A Program Head, Faculty Member, Dean, Student, or Secretary may encounter the same general domain, such as evaluations or outcomes, while having different permissions and purposes.

That makes generic documentation difficult to use. A page called "Learning Outcomes" is not enough if it does not tell the reader which outcomes they are responsible for, what they may change, and what they may only inspect.

System CLOIE also has institutional turnover and documentation obligations. The Help Center is intended to become the primary user manual and onboarding resource for ordinary users while technical handover material remains in the engineering documentation.

---

## 3. Problem

System CLOIE contains role-specific workflows, academic terminology, permissions, and multi-step processes that can be difficult for first-time or occasional users to understand without assistance.

The current product can explain individual controls inside the interface, but it should not carry a complete user manual inside every screen. Users also should not need to ask a developer what to do whenever a workflow is unfamiliar.

The Help Center must solve the following problems:

1. A user may know the page they are on but not understand what it is for.
2. A user may understand the goal but not know the sequence of steps required.
3. Different roles may interact with similar concepts in different ways.
4. A user may need help with one current task rather than a complete System CLOIE tutorial.
5. Existing technical and capstone documentation is too detailed and implementation-oriented for ordinary users.
6. Long videos alone are inefficient when a user only needs one instruction.
7. Help content can become stale if it is written from old manuscripts instead of current application behavior.

---

## 4. Product vision

A System CLOIE user should be able to click "Help with this page" from the application and land on a short, plain-language guide that explains:

- what the current page is for;
- what the user's role can do there;
- what the user should do next;
- the normal workflow;
- common problems or restrictions;
- where to go afterward;
- and, when useful, a short YouTube walkthrough.

The Help Center should feel like part of System CLOIE even though it is deployed separately.

---

## 5. Goals

### 5.1 Primary goals

The product must:

1. Provide clear user guidance for every major System CLOIE role.
2. Provide task-oriented help rather than screen-by-screen technical documentation.
3. Support direct contextual links from System CLOIE routes to corresponding help routes.
4. Explain workflows in plain language without requiring users to understand the internal architecture or database model.
5. Keep role-specific permissions and scope clear.
6. Support a general System CLOIE introduction and role onboarding guides.
7. Integrate YouTube-hosted videos without making video the only source of instructions.
8. Work well on desktop and mobile.
9. Remain usable without relying on screenshots or decorative images.
10. Be maintainable as the application changes.

### 5.2 Secondary goals

The product should:

- reduce repeated questions during demonstrations, user testing, turnover, and future operation;
- provide a concrete user-manual artifact for System CLOIE handover;
- support user validation by giving participants a real help resource during testing;
- provide stable URLs that can be linked from the application, training materials, QR codes, or messages;
- make onboarding easier for users who only access System CLOIE occasionally.

---

## 6. Non-goals

The Help Center will not:

- duplicate the full technical documentation in the System CLOIE repository;
- expose database schemas, secrets, infrastructure configuration, internal security details, or administrative credentials;
- explain implementation details that ordinary users do not need;
- replace the application's own labels, validation messages, or basic inline guidance;
- become a public project blog;
- replace institutional policy documents;
- host video files directly;
- document features that are only proposed, deferred, stubbed, or unavailable as if they are implemented;
- provide academic interpretations or decisions on behalf of ACD personnel;
- become a support-ticket system in the initial release.

---

## 7. Users and documentation areas

Each role receives a dedicated top-level section.

### 7.1 Secretary

The Secretary help area should cover the administrative workflows that the current application actually assigns to the role, including account and user administration, permitted academic-calendar administration, administrative visibility, and explicitly authorized catalog or correction actions.

The documentation must not incorrectly tell the Secretary to manage General Education ILOs or mutate course assignments if the current System CLOIE permissions do not allow those actions.

Suggested route:

```text
/help is the root domain
/secretary/
```

### 7.2 College Dean

The Dean help area should focus on college-wide oversight, analytics, academic structures, evidence review, course-assignment visibility, and the specific stewardship actions currently available.

The content must distinguish visibility from mutation. Seeing information across the college does not automatically mean the Dean owns every workflow.

Suggested route:

```text
/dean/
```

### 7.3 General Education Coordinator

The General Education Coordinator help area should cover General Education responsibilities across programs, especially Institutional Learning Outcomes, General Education course assignments, General Education course information, and applicable analytics.

Suggested route:

```text
/gen-ed-coordinator/
```

### 7.4 Program Head

The Program Head help area should cover workflows within the user's authorized program context, including Program Learning Outcomes, program-specific course assignments, evaluation instruments, deployments, response evidence, analytics, and available reports.

If one account manages multiple programs, the guides must explain selected-program context where it affects what the user sees or changes.

Suggested route:

```text
/program-head/
```

### 7.5 Faculty Member

The Faculty help area should focus on assigned courses, CILOs, outcome mapping, course-bound evaluations, course rosters or assignment visibility where applicable, and authorized course-level evidence.

Suggested route:

```text
/faculty/
```

### 7.6 Student

The Student help area should focus on available evaluations, evaluation details, answering questions, CILO rating where applicable, draft saving, review, final submission, submission history, and profile requirements.

Graduating Student Exit Survey guidance belongs inside the Student area because graduating status is an eligibility condition rather than a separate role.

Suggested route:

```text
/student/
```

### 7.7 Alumni

The Alumni help area should cover account/profile requirements, verification where applicable, available alumni evaluations, drafts, review, submission, and submission history.

Suggested route:

```text
/alumni/
```

### 7.8 Industry Partner

The Industry Partner help area should cover account/profile requirements, verification where applicable, available industry evaluations, drafts, review, submission, and submission history.

It must make clear that participation in an evaluation does not provide access to unrelated academic or student information.

Suggested route:

```text
/industry-partner/
```

---

## 8. Information architecture

The site should use a shallow structure. A user should usually reach the needed article in one or two navigation decisions.

Recommended high-level structure:

```text
/
├── getting-started/
│   ├── what-is-system-cloie/
│   ├── sign-in-and-role-selection/
│   ├── switching-roles/
│   └── profiles-and-access/
│
├── secretary/
├── dean/
├── gen-ed-coordinator/
├── program-head/
├── faculty/
├── student/
├── alumni/
├── industry-partner/
│
├── concepts/
│   ├── academic-periods/
│   ├── learning-outcomes/
│   ├── evaluations-and-deployments/
│   ├── responses-and-submissions/
│   ├── analytics-and-attainment/
│   └── privacy-and-confidentiality/
│
├── troubleshooting/
│   ├── sign-in/
│   ├── access-and-permissions/
│   ├── missing-data/
│   ├── evaluations/
│   └── account-and-profile/
│
└── videos/
    ├── overview/
    └── role-guides/
```

Do not create a deep hierarchy unless actual content volume requires it.

---

## 9. Homepage requirements

The homepage must answer two questions immediately:

1. What is System CLOIE?
2. Which role are you using?

The homepage should be text-first and uncluttered.

Recommended structure:

```text
System CLOIE Help

Find clear instructions for using System CLOIE.

[Search help]

Choose your role

Secretary
College Dean
General Education Coordinator
Program Head
Faculty Member
Student
Alumni
Industry Partner

New to CLOIE?
Watch the System CLOIE overview
```

The homepage should not resemble developer documentation. Avoid architecture diagrams, framework badges, source-code links, database terminology, or technical changelogs in the main user experience.

---

## 10. Guide-page content model

Every task guide should follow a predictable structure without forcing every article into an oversized template.

A typical guide should contain:

```text
Title

Short explanation of what this task does.

Available to
Role or roles that can perform it.

Before you start
Only when prerequisites exist.

Steps
Short numbered instructions.

What happens next
Explain the resulting state when useful.

Having trouble?
Specific problems that commonly block this task.

Related guides
Only closely related next actions.

Video
Optional YouTube walkthrough.
```

Not every page needs every section.

### 10.1 Writing rules

Content must:

- use the same labels users see in the application;
- prefer verbs and concrete actions;
- use short paragraphs;
- explain academic terminology only when the user needs it;
- distinguish "view," "manage," "create," "publish," "submit," and similar permissions accurately;
- state prerequisites before the user starts a workflow;
- tell the user when an action is final or irreversible;
- explain role or program scope when it affects the result;
- avoid implementation jargon;
- avoid copying technical manuscript prose into user guides.

Do not write:

```text
The Outcomes bounded context persists typed alignment relations.
```

Write:

```text
Use this page to connect a CILO to the broader outcome it supports.
```

### 10.2 Visual policy

The Help Center should not depend on screenshots or decorative images.

Text must be sufficient to complete the documented task.

Images may be added later when they materially reduce confusion, but they are optional rather than part of the baseline article format. This reduces maintenance when the interface changes.

---

## 11. Video strategy

Videos will be hosted on YouTube.

### 11.1 Video types

The Help Center should support three levels of video:

**General overview**

A short introduction explaining what System CLOIE is, who uses it, what information flows through it, and what the system does not do.

**Role onboarding**

One overview video per major role. Each video should explain the role's responsibilities, dashboard, navigation, and normal workflow.

**Task walkthroughs**

Short videos for workflows that benefit from seeing the interaction sequence.

### 11.2 Video requirements

- Written instructions remain authoritative for normal task completion.
- A video must not be the only place where required instructions exist.
- Use YouTube links or privacy-conscious embeds.
- Do not autoplay.
- Show the video title and approximate duration.
- Prefer short videos over one long recording covering an entire role.
- Use captions on published videos.
- When a video becomes stale, the written guide must remain usable while the video is replaced.

Example:

```text
Prefer a walkthrough?

Watch: Creating a CILO in System CLOIE
2 min 40 sec · YouTube
```

---

## 12. Contextual help integration with System CLOIE

This is a core product requirement, not an optional enhancement.

The main application should expose a lightweight help action on important user-facing pages.

Recommended labels:

- `Help with this page`
- `View guide`
- `How this works`

Avoid labels such as `Technical documentation`.

### 12.1 Route mapping

System CLOIE should maintain an explicit mapping between application routes and Help Center routes.

Example:

```ts
const helpRoutes = {
  "/faculty/cilos": "https://help.system-cloie.app/faculty/cilos/",
  "/program-head/analytics": "https://help.system-cloie.app/program-head/analytics/",
  "/student/evaluations": "https://help.system-cloie.app/student/evaluations/",
}
```

The exact implementation belongs in the main application and should follow its existing routing and configuration conventions.

### 12.2 Fallback behavior

When a route has no dedicated help article:

1. link to the nearest role-level help page;
2. do not send the user to a 404 page;
3. do not send every missing mapping to the site homepage if a role page is known.

Example:

```text
/faculty/new-feature
→ /faculty/
```

### 12.3 Stable URLs

Help URLs should be treated as product contracts once linked from System CLOIE.

When a page is renamed:

- keep a redirect from the old path;
- avoid breaking links already shipped in the application;
- avoid restructuring the entire role hierarchy casually.

---

## 13. Search

The site must provide full-text search.

Search results should prioritize:

1. exact task titles;
2. pages within the selected or inferred role;
3. common troubleshooting articles;
4. shared concepts.

Search should index user-facing guide content, not internal repository material.

Article titles should use the words users are likely to search for, such as:

```text
Submit an evaluation
Create a CILO
Why can't I see my course?
Change my active role
Publish an evaluation
View submission history
```

---

## 14. Navigation

Desktop navigation should provide:

- product/help-center identity;
- search;
- role section navigation;
- local article navigation when useful;
- an `Open System CLOIE` link.

Mobile navigation must keep the same core routes reachable without requiring precise pointer interaction.

The site should not expose all roles and every article in one enormous sidebar by default. Once a user enters a role section, navigation should emphasize that role's guides.

---

## 15. Design requirements

The Help Center should visually relate to System CLOIE without copying the application shell exactly.

Design goals:

- calm;
- readable;
- low visual noise;
- text-first;
- strong hierarchy;
- obvious search;
- obvious role selection;
- accessible keyboard navigation;
- responsive layout;
- clear focus states;
- sufficient contrast;
- comfortable line length.

Avoid:

- dashboard-style cards everywhere;
- large decorative hero sections;
- image-heavy landing pages;
- excessive motion;
- hidden navigation;
- marketing language;
- technical-framework branding in the primary UI.

Use System CLOIE naming, logo treatment, color tokens, and typography where practical, but prioritize readability over exact visual duplication.

---

## 16. Technical requirements

### 16.1 Framework

Recommended stack:

- Astro
- Starlight
- TypeScript where custom components require it
- Markdown or MDX for guide content

The implementation should stay mostly static.

Avoid adding a database or application backend unless a future product requirement clearly needs one.

### 16.2 Deployment

The site must be deployable independently from System CLOIE.

Target domain:

```text
help.system-cloie.app
```

Deployment must support:

- HTTPS;
- custom-domain configuration;
- redirects;
- cacheable static assets;
- independent releases.

The final hosting choice must comply with ACD/ICTC hosting and infrastructure approval requirements.

### 16.3 Repository separation

The Help Center should live in a repository separate from the main System CLOIE application.

The repository should contain:

- site source;
- guide content;
- reusable help components;
- video metadata/links;
- redirects;
- content governance notes;
- build and deployment configuration.

It should not contain copied application source code.

---

## 17. Content source of truth

Help content must describe current product behavior.

When determining what a user can do, use this precedence:

1. current System CLOIE code and server-enforced behavior;
2. current domain `CONTEXT.md` files and accepted ADRs;
3. current product workflow and user-journey documentation;
4. verified user testing or current stakeholder decisions;
5. capstone manuscript only where it agrees with the current implementation.

Older proposals and obsolete manuscripts must not silently reintroduce removed permissions or features.

Every article added during development should be checked against the current application before publication.

If a feature is partial, unavailable, stubbed, or deferred, either:

- do not document it as a usable workflow; or
- label its availability accurately when users can encounter it.

---

## 18. Content maintenance model

Each help article should have lightweight metadata.

Recommended frontmatter:

```yaml
---
title: Create a CILO
role: faculty
appRoutes:
  - /faculty/cilos
status: published
lastVerified: 2026-10-04
videoUrl:
---
```

Useful metadata fields:

- title;
- role;
- related application route or routes;
- content status;
- date last verified;
- optional YouTube URL;
- optional related guides.

A stale-documentation check should be part of normal System CLOIE release work for routes or workflows that change materially.

---

## 19. Analytics and privacy

If site analytics are added, they should be privacy-conscious and collect only what is needed to improve the help experience.

Useful aggregate questions include:

- Which guides are opened most often?
- What search terms return no useful result?
- Which help pages have high exits followed by another search?
- Which application routes generate the most help visits?

Do not collect evaluation responses, confidential academic information, or unnecessary personal identifiers through the Help Center.

The initial release does not require analytics if a compliant solution is not yet selected.

---

## 20. Accessibility

The Help Center must support:

- keyboard navigation;
- visible focus states;
- semantic headings;
- adequate color contrast;
- descriptive link text;
- responsive text sizing;
- reduced-motion preferences where animation exists;
- captions for YouTube videos;
- no instruction that depends only on color or image position.

The site should be usable even when a video cannot be played.

---

## 21. SEO and discoverability

The site is primarily a product help center, not a marketing site.

Public pages should have useful titles and descriptions so a user can search the web or site for a specific task.

Recommended title format:

```text
Create a CILO | System CLOIE Help
```

Role landing pages should identify the intended role clearly.

If some guides later contain sensitive operational information, those pages should not be made public merely for SEO convenience.

---

## 22. Initial content scope

The MVP should not attempt to document every route immediately.

### 22.1 Required MVP pages

**Global**

- Help Center homepage
- What is System CLOIE?
- Sign in to System CLOIE
- Choose or switch your role
- Complete your profile
- Access and permission basics
- Privacy and confidentiality basics
- General troubleshooting page

**Role landing pages**

- Secretary
- College Dean
- General Education Coordinator
- Program Head
- Faculty Member
- Student
- Alumni
- Industry Partner

**High-value task guides**

Create task guides for the routes users most frequently need to understand. At minimum, cover the primary implemented workflows identified from the current application and user-journey documentation.

Examples include:

- Faculty: manage CILOs and alignment
- Faculty: manage an applicable course evaluation
- Program Head: manage Program Learning Outcomes
- Program Head: manage program-specific course assignments
- Program Head: work with evaluation instruments and deployments
- Program Head: review analytics and response evidence
- General Education Coordinator: manage ILOs
- General Education Coordinator: manage General Education course assignments
- Student: find and complete an evaluation
- Student: save a draft and submit
- Alumni: complete an alumni evaluation
- Industry Partner: complete an industry evaluation
- Secretary: manage users/accounts
- Dean: review college-level evidence and oversight information

The exact list must be reconciled against the latest application before implementation.

### 22.2 Required videos for MVP

- System CLOIE overview
- one onboarding video for each role, if production time allows

Task-specific videos may be added after the written guides are complete.

---

## 23. Future scope

Possible later additions include:

- contextual search seeded with the current role;
- "Was this helpful?" feedback;
- version notices when a workflow changes;
- printable quick-start guides;
- QR codes for training sessions;
- role-specific YouTube playlists;
- deep links from validation messages or empty states;
- optional protected operational documentation for authorized maintainers;
- multilingual guidance if ACD adopts that requirement.

These are not required for the initial release.

---

## 24. Success metrics

The Help Center should be evaluated through user tasks rather than page count.

Useful success measures include:

- users can identify the correct role guide without assistance;
- users can complete documented workflows using the written guide;
- users can reach relevant help from the System CLOIE page they are using;
- users understand why an action is unavailable when permissions or prerequisites block it;
- users do not need developer assistance for common documented tasks;
- contextual help links do not lead to missing or unrelated articles;
- user-validation feedback shows that instructions are understandable.

For formal capstone validation, actual participant results should be recorded rather than invented in this PRD.

---

## 25. Acceptance criteria

The MVP is ready when all of the following are true:

- `help.system-cloie.app` is deployed over HTTPS.
- The homepage explains the purpose of the Help Center and provides role entry points.
- All eight current roles have dedicated landing pages.
- Graduating-student guidance is correctly contained within the Student area.
- Major implemented workflows have plain-language task guides.
- At least the highest-value System CLOIE application routes have contextual help links.
- Missing route mappings fall back to the correct role guide.
- Search returns relevant user-facing articles.
- Written guides work without screenshots.
- YouTube integration works without autoplay.
- Videos are supplementary rather than required for completing documented tasks.
- The site works on common desktop and mobile widths.
- Keyboard navigation and focus states are usable.
- No sensitive credentials, database configuration, or confidential respondent data are published.
- Every published workflow has been checked against current System CLOIE behavior.
- Broken internal links and missing help routes are checked during CI/build verification.

---

## 26. Testing requirements

### 26.1 Content verification

For each published guide:

1. open the corresponding System CLOIE route;
2. perform the documented workflow using an appropriate test account;
3. confirm labels match the application;
4. confirm the documented role has the stated permission;
5. confirm prerequisites and failure cases;
6. update `lastVerified`.

### 26.2 Site verification

Automated or repeatable checks should cover:

- successful production build;
- internal link integrity;
- redirect integrity;
- required frontmatter/schema validation;
- route generation;
- mobile and desktop navigation;
- search indexing;
- accessibility checks;
- contextual application-to-help links where cross-repository testing is feasible.

### 26.3 User validation

During user testing, participants should be allowed to use the Help Center naturally.

Observe:

- whether they choose the correct guide;
- whether instructions are understood on first reading;
- where they hesitate;
- whether they return to search repeatedly;
- whether article titles match the words users expect;
- whether videos help or slow the task.

Use actual findings to revise the content.

---

## 27. Delivery phases

### Phase 1: foundation

- create the separate repository;
- initialize Astro and Starlight;
- configure branding and navigation;
- configure `help.system-cloie.app`;
- create content schema;
- create homepage;
- create role landing pages;
- implement search;
- implement video-link/embed component;
- add link and redirect checks.

### Phase 2: core content

- document global onboarding;
- document the highest-value implemented workflow for each role;
- create troubleshooting structure;
- verify all guides against the current application.

### Phase 3: contextual integration

- add route-to-help mapping in System CLOIE;
- add `Help with this page` actions;
- implement role-level fallbacks;
- test links across all major route trees.

### Phase 4: video integration

- publish the general overview to YouTube;
- publish role onboarding videos;
- link or embed them on the appropriate pages;
- confirm captions and mobile playback.

### Phase 5: validation and refinement

- run user validation;
- record confusing terms, failed searches, and workflow misunderstandings;
- revise guides;
- add task-specific videos only where written guidance is not enough.

---

## 28. Product decisions already made

The following decisions are part of this PRD unless intentionally changed later:

- The public-facing name is a Help Center rather than developer documentation.
- The target subdomain is `help.system-cloie.app`.
- The Help Center is a separate repository and deployment.
- Astro is the preferred framework.
- Starlight is the preferred documentation foundation.
- The site is role-first and task-oriented.
- Major System CLOIE routes should link directly to relevant help pages.
- The site is text-first and should not depend on screenshots.
- Videos are hosted on YouTube.
- Videos supplement written instructions.
- The site documents actual current behavior, not aspirational features.
- Technical and maintainer documentation remains separate from end-user help.

---

## 29. Open decisions

The implementation team should resolve these during planning:

- final hosting platform approved for the separate site;
- whether the Help Center uses the exact System CLOIE visual tokens or a simplified derived theme;
- whether contextual help opens in the same tab or a new tab;
- which initial application routes receive direct help mappings before the rest;
- whether YouTube videos are embedded directly or shown as linked video cards by default;
- whether privacy-conscious aggregate analytics will be enabled;
- whether a "Was this helpful?" mechanism is justified after the first user-validation round.

None of these decisions should block creation of the core content model.

---

## 30. Source references for implementation planning

This PRD should be reconciled against the latest versions of the following System CLOIE project sources before implementation:

- `docs/product/overview.md`
- `docs/product/roles-and-access.md`
- `docs/product/workflows.md`
- `docs/system-cloie-user-journeys.md`
- `src/features/*/CONTEXT.md`
- `docs/adr/`
- current role-specific routes under `src/app/`
- current System CLOIE technical stack documentation
- institutional ICTC/ISDRT turnover policy
- current capstone technical-document guide and evidence requirements

Current code and accepted domain decisions take precedence over older proposal material when they disagree.

---

## 31. Definition of done

The Help Center is complete enough for its first production release when a first-time System CLOIE user can enter from the application, reach help for the role and task they are performing, understand the required steps without developer explanation, and return to System CLOIE to finish the workflow.

The product should answer a practical question:

> "I am on this page. What am I supposed to do?"

If the Help Center answers that clearly and accurately for the major workflows of every current role, it is doing its job.
