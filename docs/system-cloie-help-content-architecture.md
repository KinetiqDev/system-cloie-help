# System CLOIE Help Center
## Content architecture and information architecture plan

**Site:** `https://help.system-cloie.app`  
**Purpose:** User-facing help, onboarding, workflow guidance, and troubleshooting for System CLOIE  
**Audience:** Secretary, College Dean, General Education Coordinator, Program Head, Faculty Member, Student, Alumni, and Industry Partner  
**Recommended framework:** Astro + Starlight  
**Content format:** Markdown/MDX  
**Video hosting:** YouTube  
**Planning basis:** Current System CLOIE product documentation, role/access rules, user journeys, role-owned routes, domain contexts, and accepted ADRs  
**Document status:** Proposed content architecture  
**Last updated:** 2026-10-04

---

# 1. Content strategy

The Help Center should not mirror the internal System CLOIE codebase. System CLOIE is a modular monolith with feature domains such as authentication, users, academic calendar, academic structure, course assignments, outcomes, instruments, evaluations, responses, response review, analytics, enrollments, Dean oversight, legal acknowledgement, and the design system. Those domains are useful to developers, but ordinary users do not think in those terms.

The Help Center should instead organize information around four questions:

1. Who am I in System CLOIE?
2. What am I trying to do?
3. What do I need before I can do it?
4. What happens after I finish?

This makes the Help Center **role-first, task-first, and workflow-oriented**.

The user should not have to understand bounded contexts, Server Actions, Prisma models, database ownership, service boundaries, response snapshots, or authorization implementation. Those details remain in the engineering repository.

---

# 2. User-facing mental model

The site should teach one simple model of System CLOIE:

```text
Set up academic context
        ↓
Define learning outcomes
        ↓
Prepare an evaluation
        ↓
Publish it to the right respondents
        ↓
Respondents answer
        ↓
Review submitted evidence
        ↓
Use the evidence for academic review
```

Different roles participate in different parts of that sequence.

| Role | User-facing responsibility |
|---|---|
| Secretary | Sets up institutional records, accounts, academic periods, programs, courses, and institutional evaluation baselines |
| College Dean | Oversees college-wide academic structure, assignments, readiness, and learning-outcome evidence |
| General Education Coordinator | Manages General Education course assignments and Institutional Learning Outcomes |
| Program Head | Manages program-specific assignments, Graduate Outcomes, evaluation tools and deployments, and program evidence |
| Faculty Member | Manages assigned-course rosters, CILOs, outcome alignment, course evaluation tools, deployments, and course evidence |
| Student | Completes eligible student evaluations |
| Alumni | Completes eligible alumni evaluations |
| Industry Partner | Completes eligible industry evaluations |

This should appear early in the site because it explains why two users may see similar information but have different actions.

---

# 3. Information architecture principles

## 3.1 Role-first navigation

A user who already knows their role should be able to enter that role's documentation directly.

```text
/secretary/
/dean/
/gen-ed-coordinator/
/program-head/
/faculty/
/student/
/alumni/
/industry-partner/
```

## 3.2 Task-first article names

Prefer actions and questions:

```text
Create a user account
Set the active academic period
Create a Graduate Outcome
Assign a Faculty Member to a Course
Add Students to a Course roster
Create a CILO
Align a CILO with a Graduate Outcome
Publish a Course evaluation
Complete an evaluation
Review submitted responses
```

Avoid names such as `User Management Module`, `Outcome Management Module`, or `Evaluation Deployment Module`.

## 3.3 Progressive disclosure

Role landing pages should explain responsibilities and the normal workflow. Task pages should explain exact steps. Concept pages should handle shared terminology. Troubleshooting pages should start from the symptom.

## 3.4 One explanation, many entry points

Shared concepts should have one canonical article. Role guides should link to that article and explain only role-specific differences.

## 3.5 Contextual help is a primary navigation path

The preferred flow is often:

```text
System CLOIE page
→ Help with this page
→ exact Help Center article
```

Search and browsing are fallback paths, not the only paths.

---

# 4. Top-level site hierarchy

```text
/
├── start/
│   ├── what-is-system-cloie/
│   ├── choose-your-role/
│   ├── sign-in/
│   ├── switch-active-role/
│   ├── complete-your-profile/
│   └── understand-access/
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
│   ├── programs-majors-and-courses/
│   ├── course-assignments-and-rosters/
│   ├── learning-outcomes/
│   ├── outcome-alignment/
│   ├── evaluation-tools/
│   ├── evaluations-and-deployments/
│   ├── responses-and-submissions/
│   ├── analytics-and-evidence/
│   └── privacy-and-response-visibility/
│
├── troubleshooting/
│   ├── sign-in/
│   ├── role-and-access/
│   ├── profile-and-verification/
│   ├── academic-context/
│   ├── assignments-and-rosters/
│   ├── evaluations/
│   └── submissions/
│
├── workflows/
│   ├── course-evaluation/
│   ├── program-wide-evaluation/
│   ├── academic-period-transition/
│   └── student-to-alumni/
│
└── videos/
    ├── overview/
    ├── secretary/
    ├── dean/
    ├── gen-ed-coordinator/
    ├── program-head/
    ├── faculty/
    ├── student/
    ├── alumni/
    └── industry-partner/
```

---

# 5. Global navigation

Recommended primary header:

```text
System CLOIE Help | Guides | Concepts | Troubleshooting | Videos | Search | Open System CLOIE
```

`Guides` opens role selection. Once a user enters a role area, the local sidebar should emphasize that role instead of presenting every page from every role.

Mobile navigation should preserve search, the current role, the current section, and the link back to System CLOIE.

---

# 6. Homepage

Route: `/`

## H1: System CLOIE Help

Opening body:

> Find clear instructions for using System CLOIE. Choose your role, search for a task, or open a guide for the page you are using.

## H2: What do you need help with?

Primary search field.

Suggested examples:

```text
Create a CILO
Complete an evaluation
Add a user
Why can't I see my Course?
```

## H2: Choose your role

Eight text-based role entries, each with one sentence explaining what that role does.

## H2: New to System CLOIE?

Links:

- What is System CLOIE?
- How roles work
- How to sign in
- Watch the System CLOIE overview

## H2: Common help

- I can't sign in
- My role is missing
- I cannot access a page
- My profile is incomplete
- I cannot see an evaluation

No large image hero is necessary.

---

# 7. Start here section

## 7.1 What is System CLOIE?

Route: `/start/what-is-system-cloie/`

### H1: What is System CLOIE?

Explain System CLOIE as ACD's system for organizing learning outcomes, collecting evaluation feedback, and reviewing the resulting evidence.

### H2: What System CLOIE helps ACD do

Cover learning-outcome context, evaluation tools, response collection, evidence review, quality assurance, and continuous improvement.

### H2: Who uses System CLOIE?

Short descriptions of all eight roles.

### H2: What System CLOIE does not do

Explain that it is not an LMS, grading or transcript system, complete SIS, scheduling system, automatic academic decision-maker, or complete accreditation platform.

### H2: How information moves through CLOIE

```text
Academic setup → Outcomes → Evaluations → Responses → Evidence
```

### H2: Watch the introduction

YouTube overview.

The overview video sits directly under the opening paragraphs — it is not repeated at the foot of the page.

---

## 7.2 Choose your role

Route: `/start/choose-your-role/`

### H1: Choose your System CLOIE role

### H2: What a role changes

Explain visibility, allowed actions, dashboard, and profile requirements.

### H2: Available roles

Short descriptions.

### H2: If you have more than one role

Explain active-role selection.

> Selecting another assigned role changes the context you are using. It does not create or remove a role.

### H2: Why a role may not be available

Explain pre-provisioned roles versus self-service-eligible roles at a high level.

---

## 7.3 Sign in to System CLOIE

Route: `/start/sign-in/`

### H1: Sign in to System CLOIE

### H2: Before you sign in

Legal acknowledgement and account requirements.

### H2: Internal ACD users

Institutional Google sign-in.

### H2: Alumni and Industry Partners

Google or supported email/password entry.

### H2: What happens after sign-in

Possible role selection, profile completion, account status, or dashboard destinations.

### H2: Sign-in problems

Link to troubleshooting.

---

## 7.4 Switch your active role

Route: `/start/switch-active-role/`

### H1: Switch your active role

### H2: When this applies

### H2: What switching roles changes

### H2: What switching roles does not change

### H2: Switch roles

Use exact account-menu labels from the current UI.

---

## 7.5 Complete your profile

Route: `/start/complete-your-profile/`

### H1: Complete your System CLOIE profile

### H2: Why profile information is required

### H2: Student profile

### H2: Faculty profile

### H2: Alumni profile

### H2: Industry Partner profile

### H2: What happens if required information is missing

Explain profile gates and deferred states in plain language.

---

## 7.6 Understand access and permissions

Route: `/start/understand-access/`

### H1: Why you can see some pages but not others

### H2: Your role

### H2: Your scope

Use examples: Program Head and authorized program, Faculty and assigned Courses, Student and eligible evaluations, General Education Coordinator and General Education, Dean and college-wide oversight.

### H2: Viewing something does not always mean you can edit it

### H2: Access denied

Practical checks and next action.

---

# 8. Secretary section

The Secretary area should center on institutional setup and record stewardship. It must not present the Secretary as owner of every academic workflow. Course assignment access is read-only in the current responsibility model, and ILO ownership belongs to the General Education Coordinator.

## 8.1 Secretary guide

Route: `/secretary/`

### H1: Secretary guide

### H2: What you are responsible for

- users and accounts;
- school years and academic periods;
- term rollover;
- programs and majors;
- Course catalog;
- institutional baseline evaluation tools;
- approved account lifecycle actions;
- read-only Course assignment visibility.

### H2: What you do not manage

Explicitly state the current ownership of ILOs, General Education assignments, Program-specific assignments, and Faculty CILOs.

### H2: Recommended setup order

```text
Academic period
→ Programs and majors
→ Courses
→ User accounts
→ Institutional evaluation baselines
→ Verify downstream assignment setup
```

### H2: Common Secretary tasks

---

## 8.2 Manage users

Route: `/secretary/users/`

### H1: Manage System CLOIE users

### H2: What the Users page shows

### H2: Create an account

### H2: Edit an account

### H2: Activate or deactivate an account

### H2: Roles and role-specific information

### H2: Graduate transition

---

## 8.3 Create a user account

Route: `/secretary/users/create/`

### H1: Create a System CLOIE user account

### H2: Before you start

### H2: Choose the user's role

### H2: Enter role-specific information

### H2: Review the account

### H2: Create the account

### H2: What happens next

### H2: If the email already exists

---

## 8.4 Academic calendar

Route: `/secretary/academic-calendar/`

### H1: Manage school years and academic periods

### H2: School years, semesters, and terms

### H2: Create a school year

### H2: Add periods

### H2: Set the active period

### H2: Complete or cancel a period

### H2: Why the active period matters

Student placement, assignments, evaluations, readiness, and historical evidence.

---

## 8.5 Term rollover

Route: `/secretary/term-rollover/`

### H1: Move Student placements to the next academic term

### H2: What rollover changes

### H2: What rollover does not change

State clearly that Course rosters are separate.

### H2: Preview the rollover

### H2: Review exceptions

Graduating, missing information, already placed.

### H2: Run the rollover

### H2: What happens to graduating Students

---

## 8.6 Student-to-Alumni transition

Route: `/secretary/student-to-alumni/`

### H1: Transition a graduated Student to Alumni

### H2: When to use this workflow

### H2: What history is preserved

### H2: Perform the transition

### H2: What happens afterward

---

## 8.7 Programs and majors

Route: `/secretary/programs/`

### H1: Manage programs and majors

### H2: Create a program

### H2: Add or update majors

### H2: Activate or deactivate a program

### H2: Delete a program

### H2: Why deactivation is usually safer

---

## 8.8 Course catalog

Route: `/secretary/courses/`

### H1: Manage the Course catalog

### H2: General Education and Program-specific Courses

### H2: Create a Course

### H2: Catalog defaults

Explain that defaults do not equal the actual teaching assignment.

### H2: Edit or deactivate a Course

### H2: Delete a Course

---

## 8.9 Course assignment visibility

Route: `/secretary/course-assignments/`

### H1: View Course assignments

### H2: What this page shows

### H2: Why this view is read-only

### H2: Who manages assignments

- General Education Coordinator for General Education;
- Program Head for Program-specific Courses;
- Dean for college-wide stewardship.

---

## 8.10 Institutional evaluation baselines

Route: `/secretary/instruments/`

### H1: Manage institutional evaluation tools

### H2: What an institutional baseline is

### H2: Course-bound and Program-wide tools

### H2: Create a baseline

### H2: Add questions

### H2: Make a Course-bound baseline available to Faculty

### H2: Versions and published evaluations

### H2: Activate, deactivate, duplicate, or remove a baseline

---

# 9. College Dean section

The Dean section should be framed around college-wide stewardship and oversight. College-wide visibility must not be described as ownership of every workflow.

## 9.1 College Dean guide

### H1: College Dean guide

### H2: What you can oversee

College-wide structure, Courses, Course assignments and rosters where authorized, institutional evaluation baselines, and learning-outcome readiness.

### H2: What remains owned by other roles

GO authoring by Program Head, CILO authoring and mappings by Faculty, ILO authoring by General Education Coordinator, and user administration by Secretary.

### H2: Main Dean workflows

---

## 9.2 Dean dashboard

Route: `/dean/dashboard/`

### H1: Use the Dean dashboard

### H2: What the dashboard summarizes

### H2: Academic-period context

### H2: What the figures mean

### H2: Where to investigate next

---

## 9.3 Academic structure

Route: `/dean/academic-structure/`

### H1: Manage college academic structure

Group links to Programs, Courses, and Course assignments.

---

## 9.4 Course assignments

Route: `/dean/course-assignments/`

### H1: Manage Course assignments across the college

### H2: What a Course assignment represents

### H2: Create or edit an assignment

### H2: Reassign Faculty

### H2: Work with the roster

### H2: Deactivate or delete

---

## 9.5 Learning-outcome readiness

Route: `/dean/learning-outcomes/`

### H1: Review learning-outcome readiness

### H2: What this page measures

### H2: Choose an academic period

### H2: Understand readiness totals

### H2: Find mapping gaps and risks

### H2: Review historical periods

### H2: What the Dean cannot edit here

Outcomes and mappings are read-only from the oversight surface.

---

## 9.6 Institutional evaluation tools

Route: `/dean/instruments/`

Write this from the Dean perspective but reuse a shared concept article for the basic instrument model.

---

## 9.7 Reports

Do not publish a normal `Generate reports` task page until report routes and contracts are actually implemented. If a placeholder is visible, publish a short availability explanation only.

---

# 10. General Education Coordinator section

## 10.1 General Education Coordinator guide

### H1: General Education Coordinator guide

### H2: Your scope

College-wide General Education.

### H2: What you manage

- General Education Course assignments;
- Institutional Learning Outcomes;
- General Education Course information where available;
- applicable analytics.

### H2: What you do not manage

- Program-specific assignments;
- Program-owned Graduate Outcomes;
- Faculty Course rosters;
- on-behalf deployment unless the current implementation explicitly permits it.

### H2: Common tasks

---

## 10.2 Institutional Learning Outcomes

Route: `/gen-ed-coordinator/outcomes/`

### H1: Manage Institutional Learning Outcomes

### H2: What an ILO is

### H2: Create an ILO

### H2: Edit an ILO

### H2: Reorder ILOs

### H2: Archive an ILO

### H2: Restore an archived ILO

### H2: How ILOs connect to General Education CILOs

---

## 10.3 General Education alignment

Route: `/gen-ed-coordinator/outcomes/mapping/`

### H1: Review General Education CILO alignment

### H2: CILO to ILO

### H2: Manifestation values

### H2: What you can review

### H2: Who maintains mappings

Faculty is the primary mapping maintainer unless a current protected correction workflow says otherwise.

---

## 10.4 General Education Course assignments

Route: `/gen-ed-coordinator/course-assignments/`

### H1: Assign Faculty to General Education Courses

### H2: Before you start

### H2: Create an assignment

### H2: Edit an assignment

### H2: Change the Faculty owner

### H2: Deactivate or reactivate

### H2: Delete an assignment

### H2: Why roster management is separate

---

## 10.5 General Education Courses

Route: `/gen-ed-coordinator/courses/`

### H1: Work with General Education Courses

Document only the operations currently exposed to the role.

---

## 10.6 General Education analytics

Route: `/gen-ed-coordinator/analytics/`

### H1: Review General Education analytics

### H2: What evidence is included

### H2: Choose the relevant scope or period

### H2: Interpret the results

Do not frame analytics as grades or automatic academic decisions.

---

# 11. Program Head section

Program Head documentation needs especially careful scope explanation because one person may manage more than one program. Use **Graduate Outcome (GO)** as the canonical program-level outcome term.

## 11.1 Program Head guide

### H1: Program Head guide

### H2: Your program scope

### H2: If you manage more than one program

### H2: What you manage

- Program-specific Course assignments;
- Graduate Outcomes;
- program-owned evaluation tools;
- Program-wide deployments;
- authorized Course-bound deployment actions;
- program response evidence;
- program analytics.

### H2: What is read-only

Typed CILO alignment review is primarily Faculty-maintained.

### H2: Typical Program Head workflow

```text
Select program
→ Check Course assignments
→ Maintain GOs
→ Prepare evaluation tool
→ Publish deployment
→ Review responses and analytics
```

---

## 11.2 Select your active program

Route: `/program-head/select-program/`

### H1: Select the program you are working with

### H2: When the selector appears

### H2: What changing programs does

### H2: What changing programs does not do

### H2: Switch to another authorized program

---

## 11.3 Program dashboard

Help route: `/program-head/dashboard/`

Application route may contain a Program identifier, but the help URL should remain stable.

### H1: Use the Program Head dashboard

### H2: Current program

### H2: What the dashboard summarizes

### H2: Where to go next

---

## 11.4 Program Courses

Route: `/program-head/courses/`

### H1: Review Courses in your program

### H2: Program-specific Courses

### H2: General Education Courses

### H2: What you can change

---

## 11.5 Program-specific Course assignments

Route: `/program-head/course-assignments/`

### H1: Assign Faculty to Program-specific Courses

### H2: Your assignment scope

### H2: Create an assignment

### H2: Set period, year level, and section

### H2: Reassign Faculty

### H2: Open a Course roster

Only if exposed in current Program Head routes.

### H2: Deactivate, reactivate, or delete

### H2: Why General Education assignments are different

---

## 11.6 Graduate Outcomes

Route: `/program-head/outcomes/`

### H1: Manage Graduate Outcomes

### H2: What a Graduate Outcome is

### H2: Create a GO

### H2: Edit a GO

### H2: Reorder GOs

### H2: Archive and restore

### H2: How CILOs contribute to GOs

---

## 11.7 CILO-to-GO alignment review

Route: `/program-head/outcomes/alignment/`

### H1: Review CILO alignment with Graduate Outcomes

### H2: What the alignment shows

### H2: Manifestation

### H2: Readiness and missing mappings

### H2: Who maintains mappings

State clearly that Faculty maintains the mapping in the normal workflow.

---

## 11.8 Program evaluation tools

Route: `/program-head/tools/`

### H1: Manage evaluation tools for your program

### H2: Start from an institutional baseline

### H2: Create a Program-owned tool

### H2: Build or edit questions

### H2: Save versions

### H2: When a tool can be published

### H2: Reuse a tool

---

## 11.9 Program-wide evaluation

Route: `/program-head/evaluations/publish/`

### H1: Publish a Program-wide evaluation

### H2: Before you publish

Checklist: program, tool, respondent type, period, activation, deadline, outcome bindings where applicable.

### H2: Choose respondents

Student, Alumni, or Industry Partner where supported.

### H2: Set the availability window

### H2: Review the deployment

### H2: Publish

### H2: What happens next

---

## 11.10 Course evaluation on behalf of Faculty

Publish this page only if the current Program Head workflow is explicitly supported. Do not document General Education on-behalf authority if server rules prohibit it.

---

## 11.11 Responses

Route: `/program-head/responses/`

### H1: Review evaluation responses

### H2: Choose an evaluation

### H2: Completion information

### H2: Response details

### H2: Qualitative feedback

### H2: Course-bound versus Program-wide evidence

---

## 11.12 Program analytics

Route: `/program-head/analytics/`

### H1: Review Program analytics

### H2: Choose the evidence scope

### H2: Understand outcome evidence

### H2: Compare available stakeholder evidence

### H2: Read qualitative summaries

### H2: AI-assisted interpretation

If present in the current UI, explain what evidence is sent, what comes back, and that the interpretation supplements rather than replaces human CQI judgment.

### H2: What analytics do not mean

Not grades, transcripts, or automatic curriculum decisions.

---

## 11.13 Reports

Current export behavior is stubbed/deferred. Do not publish a normal report-generation guide as if it works.

---

# 12. Faculty Member section

## 12.1 Faculty guide

### H1: Faculty Member guide

### H2: Your Course scope

Teaching capability comes from active Course assignments.

### H2: What you manage

- assigned Course rosters;
- Course-level CILOs;
- CILO outcome alignment;
- Faculty-accessible or derived Course evaluation tools;
- own Course-bound deployments;
- authorized Course evidence and analytics.

### H2: What Program affiliation means

Affiliation alone does not grant access to every Course in a Program.

### H2: Typical Faculty workflow

```text
Open assigned Course
→ Check roster
→ Maintain CILOs
→ Check outcome alignment
→ Prepare evaluation tool
→ Publish Course evaluation
→ Review results
```

---

## 12.2 Course rosters

Route: `/faculty/course-rosters/`

### H1: Manage Students in your Course roster

### H2: What a Course roster is

Clarify that it is different from a Student's term placement.

### H2: Open an assigned Course

### H2: Add a Student manually

### H2: Import or reconcile a name list

Only if the CSV/name-list flow is verified in the current UI.

### H2: Remove or update membership

### H2: What changes after publication

Explain roster locking and any exposed late-inclusion or exclusion behavior.

---

## 12.3 CILOs

Route: `/faculty/cilos/`

### H1: Manage Course Intended Learning Outcomes

### H2: What a CILO is

### H2: Choose a Course

### H2: Create a CILO

### H2: Edit a CILO

### H2: Archive or restore

Only if implemented.

### H2: Course ownership

Explain that the CILO belongs to the Course context rather than to the individual Faculty Member.

---

## 12.4 Outcome alignment

Route: `/faculty/cilos/alignment/`

### H1: Align CILOs with broader learning outcomes

### H2: Which outcome should a CILO map to?

- Program-specific Course → Graduate Outcome
- General Education Course → Institutional Learning Outcome

### H2: Add or update an alignment

### H2: Choose the manifestation value

### H2: Check readiness

### H2: Why alignment matters before publication

---

## 12.5 Course evaluation tools

Route: `/faculty/tools/`

### H1: Manage evaluation tools for your Courses

### H2: Start from an available template

### H2: Create a derived Course-bound tool

### H2: Add questions

### H2: Bind questions to CILOs

### H2: Save and edit

### H2: Published versions stay fixed

---

## 12.6 Publish Course evaluation

Route: `/faculty/evaluations/publish/`

### H1: Publish a Course evaluation

### H2: Before you publish

Checklist: Course assignment, roster, CILOs, required mappings, evaluation tool, activation, deadline.

### H2: Choose the Course assignment

### H2: Review respondents and exclusions

### H2: Set the window

### H2: Publish

### H2: What becomes locked

### H2: Close an evaluation

---

## 12.7 Review a Course evaluation

Route: `/faculty/evaluations/review/`

### H1: Review a published Course evaluation

### H2: Evaluation status

### H2: Completion summary

### H2: Review submitted responses

Faculty review should be described as anonymized.

### H2: Written feedback

Explain privacy constraints.

---

## 12.8 Faculty analytics

Route: `/faculty/analytics/`

### H1: Review evidence for your Courses

### H2: Choose a Course or evaluation

### H2: CILO results

### H2: Written feedback

### H2: What the results mean

### H2: What the results do not mean

Not individual grades or transcripts.

---

# 13. Student section

Student documentation should be the simplest role area.

```text
Sign in
→ See an available evaluation
→ Answer
→ Save if needed
→ Review
→ Submit
→ View history
```

## 13.1 Student guide

### H1: Student guide

### H2: What you use System CLOIE for

### H2: Your normal workflow

### H2: What you cannot do

---

## 13.2 Student dashboard

Route: `/student/dashboard/`

### H1: Use your Student dashboard

### H2: Available evaluations

### H2: In-progress evaluations

### H2: Academic placement warning

### H2: Previous submissions

---

## 13.3 Available evaluations

Route: `/student/evaluations/`

### H1: Find evaluations you can complete

### H2: Why an evaluation appears here

### H2: Evaluation status

### H2: Open an evaluation

### H2: If you expected an evaluation but cannot see it

---

## 13.4 Complete an evaluation

Route: `/student/evaluations/complete/`

### H1: Complete an evaluation

### H2: Before you begin

### H2: Read the introduction

### H2: Answer rating questions

### H2: Rate CILOs when included

### H2: Answer written questions

### H2: Move through sections

### H2: Save a draft

### H2: Fix incomplete required answers

### H2: Review your answers

### H2: Submit

### H2: After submission

---

## 13.5 Save and continue later

Route: `/student/evaluations/save-draft/`

### H1: Save an evaluation draft

### H2: When drafts are saved

### H2: Return to the evaluation

### H2: Deadline warning

A saved draft is not a final submission.

---

## 13.6 Review and submit

Route: `/student/evaluations/submit/`

### H1: Review and submit your evaluation

### H2: Check your answers

### H2: Confirm submission

### H2: What happens after submission

### H2: Can I change a submitted evaluation?

Explain current immutability.

---

## 13.7 Submission history

Route: `/student/history/`

### H1: View your submitted evaluations

### H2: What appears in History

### H2: Open a submitted response

### H2: Why answers are read-only

---

## 13.8 Graduating Student evaluations

Route: `/student/graduating/`

### H1: Evaluations for graduating Students

### H2: Graduating Student is not a separate CLOIE role

### H2: Why a graduating evaluation may appear

### H2: Complete the evaluation

Link to the shared Student evaluation task.

---

# 14. Alumni section

## 14.1 Alumni guide

### H1: Alumni guide

### H2: What Alumni use CLOIE for

### H2: Account entry

Google or email/password where supported.

### H2: Verification

Match the current verification behavior exactly.

### H2: Normal workflow

```text
Sign in
→ Complete profile
→ Open available evaluation
→ Save draft if needed
→ Review
→ Submit
→ View history
```

---

## 14.2 Alumni account

Route: `/alumni/account/`

### H1: Set up your Alumni account

### H2: Sign up or sign in

### H2: Enter Alumni information

### H2: Verification status

### H2: If your account is rejected

---

## 14.3 Alumni evaluations

Route: `/alumni/evaluations/`

### H1: Complete an Alumni evaluation

### H2: Find available evaluations

### H2: Answer questions

### H2: Save a draft

### H2: Review and submit

### H2: After submission

---

## 14.4 Alumni history

Route: `/alumni/history/`

### H1: View your submitted Alumni evaluations

Use the same broad pattern as Student history with Alumni wording.

---

# 15. Industry Partner section

## 15.1 Industry Partner guide

### H1: Industry Partner guide

### H2: What Industry Partners use CLOIE for

### H2: What access does not include

No unrelated Student records, Faculty data, Program management, or academic administration.

### H2: Account entry and verification

### H2: Normal workflow

---

## 15.2 Industry Partner account

Route: `/industry-partner/account/`

### H1: Set up your Industry Partner account

### H2: Sign up or sign in

### H2: Enter organization information

### H2: Program affiliation

Document only the currently supported affiliation model.

### H2: Verification

### H2: If your account is rejected

---

## 15.3 Industry Partner evaluations

Route: `/industry-partner/evaluations/`

### H1: Complete an Industry Partner evaluation

### H2: Find the evaluation

### H2: Answer rating questions

### H2: Add written feedback

### H2: Save a draft

### H2: Review and submit

### H2: After submission

---

## 15.4 Industry Partner history

Route: `/industry-partner/history/`

### H1: View your submitted Industry Partner evaluations

---

# 16. Shared concepts section

Concept pages should answer four things:

1. What is this in System CLOIE?
2. Why does the user see it?
3. What does it connect to?
4. Which roles usually work with it?

The Concepts area should not become an OBE textbook.

## 16.1 Academic periods

Route: `/concepts/academic-periods/`

### H1: Academic periods in System CLOIE

### H2: School year

### H2: Semester and term

### H2: Summer

### H2: Active period

### H2: Why periods matter

---

## 16.2 Programs, majors, and Courses

Route: `/concepts/programs-majors-courses/`

Explain hierarchy and the distinction between General Education and Program-specific Course scope.

---

## 16.3 Course assignments and rosters

Route: `/concepts/course-assignments-and-rosters/`

### H1: Course assignments and Course rosters

### H2: Course

Catalog record.

### H2: Course assignment

Actual teaching context for an academic period.

### H2: Course roster

Students who participate in the Course-bound evaluation context.

### H2: Student term placement is different

This distinction should be explicit.

---

## 16.4 Learning outcomes

Route: `/concepts/learning-outcomes/`

### H1: Learning outcomes in System CLOIE

### H2: Institutional Learning Outcome

### H2: Graduate Outcome

### H2: Course Intended Learning Outcome

### H2: Who maintains each outcome

Include a compact responsibility table.

---

## 16.5 Outcome alignment

Route: `/concepts/outcome-alignment/`

### H1: How CILOs connect to broader outcomes

### H2: Program-specific Courses

CILO → GO.

### H2: General Education Courses

CILO → ILO.

### H2: Manifestation

Learning, Practice, Opportunity when present in current UI.

### H2: Readiness

Explain missing mappings and readiness without implementation jargon.

---

## 16.6 Evaluation tools

Route: `/concepts/evaluation-tools/`

### H1: Evaluation tools in System CLOIE

### H2: Institutional baseline

### H2: Program-owned tool

### H2: Faculty-derived Course tool

### H2: Versions

Explain why an already-published evaluation keeps the version used at publication.

---

## 16.7 Evaluations and deployments

Route: `/concepts/evaluations-and-deployments/`

### H1: Evaluations in System CLOIE

### H2: Course-bound evaluation

Audience comes from a Course roster.

### H2: Program-wide evaluation

Audience comes from Program-targeted respondent rules.

### H2: Activation and deadline

### H2: Scheduled, active, and closed

Only statuses users actually encounter.

---

## 16.8 Responses and submissions

Route: `/concepts/responses-and-submissions/`

### H1: Drafts, responses, and submissions

### H2: Draft

### H2: Submitted response

### H2: One-response rule

### H2: Why submitted responses are locked

---

## 16.9 Analytics and evidence

Route: `/concepts/analytics-and-evidence/`

### H1: How to read CLOIE evidence

### H2: What analytics summarizes

### H2: What evidence is not

Not a grade, transcript, or automatic academic decision.

### H2: Human review

The institution remains responsible for interpretation and action.

---

## 16.10 Privacy and response visibility

Route: `/concepts/privacy-and-response-visibility/`

### H1: Who can see evaluation responses?

Explain role-level visibility without revealing security implementation details.

Key distinctions:

- respondents see their own workflow/history;
- Faculty review is anonymized;
- Dean oversight is privacy-safe and read-only;
- Program Head has the currently approved response-review scope;
- qualitative feedback requires careful handling.

---

# 17. Troubleshooting architecture

Troubleshooting should be symptom-based.

Prefer:

```text
I can't sign in
My role is missing
I can't see my Course
I can't see an evaluation
I can't submit my answers
My account is pending verification
```

Avoid internal terms such as `Evaluation Assignment Resolution Troubleshooting`.

## 17.1 Sign-in problems

Suggested pages:

```text
/troubleshooting/sign-in/acd-account/
/troubleshooting/sign-in/email-domain/
/troubleshooting/sign-in/inactive-account/
/troubleshooting/sign-in/dashboard-access/
/troubleshooting/sign-in/account-match/
```

Every page should use:

### H1: User-visible problem

### H2: Check this first

### H2: Why this can happen

### H2: What you can do

### H2: When to contact an administrator

## 17.2 Role and access problems

```text
/troubleshooting/role-missing/
/troubleshooting/access-denied/
/troubleshooting/wrong-role/
/troubleshooting/program-not-visible/
/troubleshooting/course-not-visible/
```

## 17.3 Profile and verification

```text
/troubleshooting/profile-incomplete/
/troubleshooting/alumni-verification/
/troubleshooting/industry-verification/
/troubleshooting/student-placement/
```

## 17.4 Assignments and rosters

```text
/troubleshooting/course-assignment-missing/
/troubleshooting/student-not-found-for-roster/
/troubleshooting/roster-locked/
```

## 17.5 Evaluation problems

```text
/troubleshooting/evaluation-not-visible/
/troubleshooting/evaluation-not-open-yet/
/troubleshooting/evaluation-closed/
/troubleshooting/cannot-publish-evaluation/
/troubleshooting/missing-outcome-alignment/
```

## 17.6 Submission problems

```text
/troubleshooting/cannot-save-draft/
/troubleshooting/incomplete-required-answers/
/troubleshooting/cannot-submit/
/troubleshooting/already-submitted/
```

---

# 18. Cross-role workflow pages

Some connected workflows deserve a story across roles. These pages are useful for onboarding and training but should not replace role guides.

## 18.1 Course evaluation lifecycle

Route: `/workflows/course-evaluation/`

### H1: How a Course evaluation moves through System CLOIE

### H2: Course assignment is prepared

Program Head or General Education Coordinator, depending on Course scope.

### H2: Faculty prepares the roster and CILOs

### H2: Faculty checks outcome alignment

### H2: Faculty prepares and publishes the evaluation

### H2: Students complete the evaluation

### H2: Faculty and Program Head review evidence

---

## 18.2 Program-wide stakeholder evaluation

Route: `/workflows/program-wide-evaluation/`

Secretary/program setup → Program Head GO/tool/deployment → Student, Alumni, or Industry Partner response → Program Head evidence review.

---

## 18.3 Academic-period transition

Route: `/workflows/academic-period-transition/`

Secretary completes/activates periods, System CLOIE preserves readiness context, Dean reviews historical readiness.

---

## 18.4 Student-to-Alumni transition

Route: `/workflows/student-to-alumni/`

Term rollover identifies graduating Students, Secretary performs managed transition after institutional confirmation, historical Student evidence remains preserved, future respondent work occurs as Alumni.

---

# 19. Video library

Route: `/videos/`

Videos are another entry point into the same information, not a separate documentation system.

## H1: System CLOIE video guides

### H2: Start here

- What is System CLOIE?
- How roles work
- How to sign in

### H2: Videos by role

Eight role groups.

### H2: Short task walkthroughs

Only list videos that exist.

Role landing pages should prominently link or embed the corresponding onboarding video. Task pages should place short walkthroughs after the written steps or after the short introduction. The video page should link back to the written guide.

---

# 20. Page templates

## 20.1 Role landing page

```md
# Faculty Member guide

One short paragraph explaining the role.

## What you use System CLOIE for

## Your normal workflow

## Common tasks

## What you can see but not change

## Common problems

## Watch the Faculty onboarding guide
```

## 20.2 Task guide

```md
# Create a CILO

Use this task when you need to add a Course Intended Learning Outcome to a Course you are authorized to manage.

**Available to:** Faculty Member

## Before you start

You need an active Course assignment for the Course.

## Create the CILO

1. Open ...
2. Choose ...
3. Enter ...
4. Save ...

## What happens next

...

## Having trouble?

...

## Related guides

...
```

Optional sections:

```text
What this changes
What this does not change
Why this option is unavailable
After publication
Privacy note
```

## 20.3 Troubleshooting article

```md
# I can't see an evaluation

## Check whether the evaluation is available yet

...

## Check whether you are eligible

...

## If you are a Student

...

## If you are Alumni or an Industry Partner

...

## If the problem continues

...
```

---

# 21. Heading and body rules

## 21.1 H1

Use one H1. It names the user's goal.

Good:

```text
Create a user account
Publish a Course evaluation
Complete an Alumni evaluation
Review learning-outcome readiness
```

## 21.2 Opening paragraph

Use two or three sentences. State what the page helps with, who it applies to, and the result.

## 21.3 H2 headings

Use action or question headings.

Good:

```text
Before you start
Create the account
Choose the academic period
Review the assignment
What happens after submission
Why can't I edit this?
```

Avoid vague headings such as `Details`, `Information`, or `Additional notes`.

## 21.4 Body

Use one idea per paragraph, exact UI labels, direct instructions, numbered steps for procedures, and bullets only when order does not matter.

Avoid spatial instructions when a stable label exists.

Bad:

> Click the blue button on the right.

Better:

> Select **Publish evaluation**.

## 21.5 Canonical terminology

Use these terms consistently:

- System CLOIE
- Institutional Learning Outcome or ILO
- Graduate Outcome or GO
- Course Intended Learning Outcome or CILO
- Course
- Course assignment
- Course roster
- academic period
- evaluation tool
- evaluation
- response
- submission
- active role
- authorized program

Do not cycle through synonyms for the same thing.

---

# 22. Contextual help architecture

Documentation URLs should be stable and should not reproduce every dynamic application URL.

Example:

```text
Application:
/program-head/programs/<programId>/outcomes

Help:
/program-head/outcomes/
```

The Program identifier does not belong in the Help Center URL.

## 22.1 Mapping metadata

Each article can declare:

```yaml
appRoutes:
  - /program-head/programs/:programId/outcomes
  - /program-head/programs/:programId/outcomes/*
```

The main application resolves the current route to a stable Help Center URL.

## 22.2 Page-level versus task-level help

Main page help:

```text
/faculty/cilos
→ /faculty/cilos/
```

Specific task help where useful:

```text
Create CILO
→ /faculty/cilos/create/
```

Do not attach help icons to every control.

## 22.3 Role fallback

If no exact mapping exists:

```text
/faculty/new-route
→ /faculty/
```

If role is unknown:

```text
→ /start/choose-your-role/
```

---

# 23. Product architecture to documentation architecture

| Product/domain architecture | Help Center presentation |
|---|---|
| Auth + Users + Legal | Sign in, roles, profiles, verification, access |
| Academic Calendar | School years, periods, active academic period, rollover |
| Academic Structure | Programs, majors, Courses |
| Course Assignments | Faculty assignment and Course rosters |
| Enrollments | Student academic placement |
| Outcomes | ILOs, GOs, CILOs, alignment |
| Instruments | Evaluation tools |
| Evaluations | Publishing and evaluation availability |
| Responses | Drafting, reviewing, submitting |
| Response Review | Review submitted evidence |
| Analytics | Analytics and evidence interpretation |
| Dean | College-wide readiness oversight |
| Design System | Not a content section except appearance/help behavior |

The codebase remains the source of truth for rules. It should not dictate the navigation tree.

---

# 24. Content maturity and visibility

Track content state separately from product state.

Content state:

```text
draft
verified
published
retired
```

Product state:

```text
implemented
partial
deferred
```

Example:

```yaml
---
title: Generate a Program report
contentStatus: draft
productStatus: deferred
publish: false
---
```

This prevents unfinished features from appearing as promises.

---

# 25. Content metadata

Recommended frontmatter:

```yaml
---
title: Publish a Course evaluation
description: Publish a Course-bound evaluation to Students in an assigned Course roster.
role:
  - faculty
appRoutes:
  - /faculty/cilo-evaluations/new
contentStatus: published
productStatus: implemented
lastVerified: 2026-10-04
keywords:
  - publish evaluation
  - course evaluation
  - student evaluation
videoUrl:
related:
  - /faculty/course-rosters/
  - /faculty/cilos/alignment/
---
```

Optional maintainer-only fields:

```yaml
sourceDomains:
sourceDecisions:
prerequisites:
estimatedReadTime:
```

---

# 26. Content governance

Use this source order when verifying help content:

1. Current System CLOIE implementation and server-enforced behavior.
2. Current `src/features/*/CONTEXT.md`.
3. Accepted ADRs.
4. `docs/product/roles-and-access.md`.
5. `docs/product/workflows.md`.
6. `docs/system-cloie-user-journeys.md`.
7. Current validated user testing and stakeholder decisions.
8. Current capstone manuscript where it agrees with the above.

Older proposals must not override current behavior.

Every user-facing feature change should ask whether it changes a label, required field, permission, workflow order, route, status, prerequisite, or irreversible action. If yes, review the relevant Help Center pages.

Store a `lastVerified` date for workflow articles.

---

# 27. Search architecture

Search should understand user language without replacing canonical terms.

Useful aliases:

```text
learning outcome → ILO / GO / CILO
program outcome → Graduate Outcome
GO → Graduate Outcome
class list → Course roster
survey → evaluation
form → evaluation tool or evaluation depending on context
can't answer → evaluation troubleshooting
```

Search ranking should prefer:

1. exact title match;
2. current-role pages when role context exists;
3. task guides;
4. troubleshooting;
5. concepts;
6. video index.

---

# 28. Related content

At the bottom of a task page, show only the natural next links:

- prerequisite;
- next task;
- relevant troubleshooting.

Example:

```text
Create a CILO
→ Align CILOs with outcomes
→ Publish a Course evaluation
→ Why can't I publish my evaluation?
```

Avoid long generic `See also` lists.

---

# 29. Video placement

## Role landing pages

Prominently link or embed the role onboarding video.

## Task pages

Use a block such as:

```text
Watch the walkthrough

Creating a CILO in System CLOIE
2:40 · YouTube
```

Written instructions remain sufficient without the video.

## Video index

Every video entry should link to its written guide.

---

# 30. MVP content order

## Global

- Home
- What is System CLOIE?
- Choose your role
- Sign in
- Switch active role
- Understand access
- Learning outcomes concept
- Course assignment vs Course roster
- Evaluation tool vs evaluation
- Privacy and response visibility
- core troubleshooting

## Secretary

- role guide
- users
- create user
- academic periods
- rollover
- Programs
- Courses
- baseline tools
- Course assignment visibility

## Dean

- role guide
- dashboard
- academic structure
- Course assignments
- learning-outcome readiness

## General Education Coordinator

- role guide
- ILOs
- General Education assignments
- alignment review
- analytics if verified

## Program Head

- role guide
- program selection
- dashboard
- Course assignments
- GOs
- alignment review
- evaluation tools
- Program-wide evaluation
- responses
- analytics

## Faculty

- role guide
- Course rosters
- CILOs
- outcome alignment
- evaluation tools
- publish Course evaluation
- review evaluation
- analytics

## Student

- role guide
- dashboard
- available evaluations
- complete evaluation
- save draft
- submit
- history

## Alumni

- role guide
- account and verification
- complete evaluation
- history

## Industry Partner

- role guide
- account and verification
- complete evaluation
- history

---

# 31. Do not publish these as completed workflows yet

Until implementation or policy is settled, do not write these as normal completed guides:

- full Program Head PDF/spreadsheet report export;
- Dean report export;
- final analytics formulas that remain under product decision;
- unsettled minimum-response privacy suppression behavior;
- incomplete external-account approval administration;
- Industry Partner access-code behavior while policy remains open;
- whole-app offline mutation or offline respondent submission;
- requested/tutorial Course types while deferred.

If the application exposes a placeholder, publish an availability explanation rather than invented task steps.

---

# 32. Sidebar plan

Recommended global sidebar:

```text
Start here
  What is System CLOIE?
  Choose your role
  Sign in
  Switch roles
  Understand access

Guides by role
  Secretary
  College Dean
  General Education Coordinator
  Program Head
  Faculty Member
  Student
  Alumni
  Industry Partner

Concepts
  Academic periods
  Programs, majors, and Courses
  Course assignments and rosters
  Learning outcomes
  Outcome alignment
  Evaluation tools
  Evaluations
  Responses and submissions
  Analytics and evidence
  Privacy

Troubleshooting

Videos
```

Inside a role section, the role's own pages should be the dominant local navigation.

---

# 33. Suggested repository content structure

```text
src/content/docs/
├── index.mdx
├── start/
│   ├── what-is-system-cloie.mdx
│   ├── choose-your-role.mdx
│   ├── sign-in.mdx
│   ├── switch-active-role.mdx
│   ├── complete-your-profile.mdx
│   └── understand-access.mdx
├── secretary/
│   ├── index.mdx
│   ├── users/
│   │   ├── index.mdx
│   │   └── create.mdx
│   ├── academic-calendar.mdx
│   ├── term-rollover.mdx
│   ├── student-to-alumni.mdx
│   ├── programs.mdx
│   ├── courses.mdx
│   ├── course-assignments.mdx
│   └── instruments.mdx
├── dean/
│   ├── index.mdx
│   ├── dashboard.mdx
│   ├── academic-structure.mdx
│   ├── course-assignments.mdx
│   ├── learning-outcomes.mdx
│   └── instruments.mdx
├── gen-ed-coordinator/
│   ├── index.mdx
│   ├── outcomes.mdx
│   ├── outcome-alignment.mdx
│   ├── course-assignments.mdx
│   ├── courses.mdx
│   └── analytics.mdx
├── program-head/
│   ├── index.mdx
│   ├── select-program.mdx
│   ├── dashboard.mdx
│   ├── courses.mdx
│   ├── course-assignments.mdx
│   ├── outcomes.mdx
│   ├── outcome-alignment.mdx
│   ├── tools.mdx
│   ├── publish-program-evaluation.mdx
│   ├── responses.mdx
│   └── analytics.mdx
├── faculty/
│   ├── index.mdx
│   ├── course-rosters.mdx
│   ├── cilos.mdx
│   ├── outcome-alignment.mdx
│   ├── tools.mdx
│   ├── publish-course-evaluation.mdx
│   ├── review-evaluation.mdx
│   └── analytics.mdx
├── student/
│   ├── index.mdx
│   ├── dashboard.mdx
│   ├── evaluations.mdx
│   ├── complete-evaluation.mdx
│   ├── save-draft.mdx
│   ├── submit.mdx
│   ├── history.mdx
│   └── graduating.mdx
├── alumni/
│   ├── index.mdx
│   ├── account.mdx
│   ├── evaluations.mdx
│   └── history.mdx
├── industry-partner/
│   ├── index.mdx
│   ├── account.mdx
│   ├── evaluations.mdx
│   └── history.mdx
├── concepts/
│   ├── academic-periods.mdx
│   ├── programs-majors-courses.mdx
│   ├── course-assignments-and-rosters.mdx
│   ├── learning-outcomes.mdx
│   ├── outcome-alignment.mdx
│   ├── evaluation-tools.mdx
│   ├── evaluations-and-deployments.mdx
│   ├── responses-and-submissions.mdx
│   ├── analytics-and-evidence.mdx
│   └── privacy-and-response-visibility.mdx
├── troubleshooting/
│   └── ...
├── workflows/
│   ├── course-evaluation.mdx
│   ├── program-wide-evaluation.mdx
│   ├── academic-period-transition.mdx
│   └── student-to-alumni.mdx
└── videos/
    └── ...
```

---

# 34. Why this hierarchy fits System CLOIE

This hierarchy avoids two bad extremes.

The first is mirroring the codebase:

```text
Auth
Users
Outcomes
Evaluations
Responses
Analytics
```

That is useful to developers but forces users to translate implementation concepts into their job.

The second is creating a separate page for every screen, dialog, and button. That becomes brittle and expensive to maintain.

The proposed structure uses:

- **roles** for ownership and orientation;
- **tasks** for action;
- **concepts** for shared understanding;
- **troubleshooting** for recovery;
- **workflows** for end-to-end understanding;
- **videos** as supplementary teaching material.

It reflects System CLOIE's architecture without exposing the internal architecture directly.

---

# 35. Final content test

Every published page should pass one test:

> A user arrives here because something in System CLOIE is unfamiliar. Can this page tell them what the current feature means, what they are allowed to do, what to do next, and what result to expect without requiring help from a developer?

If yes, it belongs in the Help Center.

If a page mainly explains how the code works, how the database stores data, or why an architectural decision was made, it belongs in the engineering documentation instead.
