---
title: Source reconciliation
description: Material differences between the Help Center planning documents and the current System CLOIE application. Internal — not published through site navigation.
lastReviewed: 2026-10-04
applicationCommit: 511402d
---

# Source reconciliation

Maintainer-only. Not linked from public navigation and not in the docs sidebar.

Compared: `docs/system-cloie-help-center-prd.md` and
`docs/system-cloie-help-content-architecture.md` against
[`KinetiqDev/system-cloie`](https://github.com/KinetiqDev/system-cloie) at commit
`511402d`, using `docs/product/roles-and-access.md`, `docs/product/workflows.md`,
`docs/system-cloie-user-journeys.md`, `src/lib/constants/navigation.ts`,
`src/features/*/CONTEXT.md`, and `docs/adr/`.

## Precedence used for published content

1. Current server-enforced application behaviour.
2. Current feature `CONTEXT.md`.
3. Accepted ADRs.
4. Current product documentation.
5. Current user-journey documentation.
6. The Help Center PRD and content architecture.
7. Older manuscript/proposal material.

## Material differences

### 1. General Education Coordinator is an eighth role, and it owns the ILO catalog

The journeys documentation lists seven roles. The application defines eight: a
pre-provisioned `GEN_ED_COORDINATOR` role with its own route tree
(`/gen-ed-coordinator/**`) and navigation group.

Per [ADR 0018](https://github.com/KinetiqDev/system-cloie/blob/main/docs/adr/0018-transfer-ilo-ownership-to-gen-ed-coordinator.md),
the General Education Coordinator owns the Institutional Learning Outcome
catalog outright. The Secretary has **no** ILO access at all —
`src/app/(app)/secretary/learning-outcomes/page.tsx` redirects to
`/secretary/dashboard`.

**Resolution.** Documented eight roles. The Secretary guide states plainly that
ILO management is not a Secretary responsibility, and links the Coordinator guide.

### 2. Secretary holds no Course-assignment mutation

[ADR 0019](https://github.com/KinetiqDev/system-cloie/blob/main/docs/adr/0019-remove-secretary-course-assignment-mutation.md)
removed it. The Secretary route `/secretary/course-assignments` is read-only.

**Resolution.** `/secretary/course-assignments/` documents the view and names the
owning role per Course scope (Program Head / General Education Coordinator /
Dean). No mutation steps written.

### 3. Dean has no analytics or reports

The PRD and architecture list Dean dashboard, readiness, and "reports where
currently supported". In the application `/app/dean/analytics/page.tsx` and
`/app/dean/reports/page.tsx` both call `notFound()`, and neither appears in
`DEAN_NAV_GROUPS`.

**Resolution.** No Dean analytics or reports guide exists. `/dean/evaluation-tools/`
states the gap in an availability notice rather than omitting it silently.

### 4. Dean enrollment/roster oversight was removed

[ADR 0024](https://github.com/KinetiqDev/system-cloie/blob/main/docs/adr/0024-remove-dean-enrollment-oversight.md)
removed a separate Dean enrollment oversight surface. Dean's assignment authority
remains (all-program Course assignments, including rosters as part of assignment
stewardship), but there is no roster-oversight page.

**Resolution.** `/dean/course-assignments/` says rosters are managed through the
role-owned Course-assignment routes.

### 5. Program Head report export is a stub

`/program-head/programs/[programId]/reports/page.tsx` renders a list of three
planned reports with descriptions saying they are prepared for later export
integration. No export control exists.

**Resolution.** `/program-head/reports/` is published with
`productStatus: deferred` and an availability notice. It is deliberately absent
from task navigation.

### 6. Program Head multi-program context is program selection, not role switching

[ADR 0009](https://github.com/KinetiqDev/system-cloie/blob/main/docs/adr/0009-program-head-selected-program-context.md)
plus [ADR 0022](https://github.com/KinetiqDev/system-cloie/blob/main/docs/adr/0022-multi-role-accounts-with-active-role-context.md):
a Program Head with several authorized programs uses the **program switcher**,
while multi-*role* accounts use the **role selector**.

**Resolution.** Two distinct guides: `/start/switch-active-role/` and
`/program-head/select-program/`. Each cross-links and says what the other does
not cover.

### 7. Alumni and Industry Partner may use Google *or* email-password

The architecture's older assumption was Google-only external access. Current
`src/features/auth/CONTEXT.md` defines Alumni and Industry Partner as the only
roles permitted to use email-password alongside Google; internal roles are
Google-only and refuse password/one-time-code/recovery sessions.
`src/app/(public)/login/external/page.tsx` reads "Sign in with your email and
password, or choose Google."

**Resolution.** `/start/sign-in/`, `/alumni/account/`, and
`/industry-partner/account/` all state the split. Two troubleshooting articles
cover the consequence (wrong method for the account's registration).

### 8. Course-bound publication is blocked by the alignment gate

The architecture lists "alignment review" as a Program Head / Coordinator
read-only activity. The application additionally hard-blocks Course-bound
publication until every active CILO satisfies the typed alignment rule
(`prepareOutcomeWrite`, the publication alignment gate).

**Resolution.** Treated as a hard product rule, not advice. Stated in
`/concepts/outcome-alignment/`, `/faculty/outcome-alignment/`,
`/faculty/publish-course-evaluation/`, and
`/troubleshooting/cannot-publish-evaluation/`.

### 9. Roster membership is name-based; there are no Student IDs

[ADR 0015](https://github.com/KinetiqDev/system-cloie/blob/main/docs/adr/0015-name-based-course-roster-resolution-and-student-id-removal.md).
The roster UI reports `Exact match`, `Ambiguous`, `Invalid name`,
`Already Enrolled`, and `Keep Student`.

**Resolution.** `/faculty/course-rosters/` documents the CSV reconcile loop and
the ambiguity rule as a safety property. The architecture's "add a Student
manually" step is described by name search, not by ID.

### 10. Roster writes lock at publication

Publishing creates one respondent assignment per eligible roster member and locks
ordinary roster writes; exclusion/late-inclusion controls replace roster editing
during the window.

**Resolution.** Documented as a consequence with the alternative control named,
in `/concepts/course-assignments-and-rosters/`,
`/faculty/publish-course-evaluation/`, and
`/troubleshooting/roster-locked/`.

### 11. General Education analytics first release is Course-bound GE evidence only

`src/features/analytics/CONTEXT.md` defines an approved first-release Coordinator
evidence path covering Course-bound General Education evidence only.

**Resolution.** `/gen-ed-coordinator/analytics/` states the limit explicitly,
including that an empty GE analytics view does not mean nothing was evaluated.

### 12. Requested and Tutorial Course types are not implemented

Confirmed in `docs/system-cloie-user-journeys.md`. Only General Education and
Program-specific Courses exist today.

**Resolution.** `/concepts/programs-majors-courses/` records it as a current
limitation.

### 13. Small-group privacy suppression is undecided

The architecture flags it as open. No suppression rule is implemented, and raw
qualitative comment reuse is not cleared by removing account identifiers.

**Resolution.** `/concepts/privacy-and-response-visibility/` and
`/program-head/responses/` both state that no specific suppression rule may be
assumed and that comment reuse is a separate privacy decision.

### 14. Multi-program Industry Partner affiliation is undecided

`src/features/auth/CONTEXT.md` records the policy as open. One primary
affiliation per account is the current data model.

**Resolution.** `/industry-partner/account/` and
`/workflows/program-wide-evaluation/` state the limit rather than inventing an
access-code workflow.

### 15. Student access codes do not exist

The only trace of "access code" in the repository is the journeys documentation
as a historical/negative reference. There is no access-code flow.

**Resolution.** `/student/index/` and `/industry-partner/index/` state that there
is no access code, so nobody waits for one.

### 16. Program Learning Outcome → Graduate Outcome

[ADR 0030](https://github.com/KinetiqDev/system-cloie/blob/main/docs/adr/0030-graduate-outcome-canonical-terminology.md)
makes **Graduate Outcome (GO)** canonical, superseding
[ADR 0017](https://github.com/KinetiqDev/system-cloie/blob/main/docs/adr/0017-program-learning-outcome-canonical-terminology.md).

**Resolution.** GO is the only term used in prose. "PLO" and "program learning
outcome" appear only in `keywords:` frontmatter so the search index still finds
older vocabulary.

### 17. Secretary outcome-write authority disagreement is unresolved upstream

`docs/product/workflows.md` records that [ADR 0005](https://github.com/KinetiqDev/system-cloie/blob/main/docs/adr/0005-outcome-ownership-and-dean-oversight.md)
§2 still grants college-wide GO authority to the Dean while
`prepareOutcomeWrite` admits only a Program Head for GO, the Coordinator for ILO,
and Faculty for CILO.

**Resolution.** The site follows the enforced code (the precedence rule), so no
role is documented as able to edit outcomes except the owning role. This is
recorded here so the discrepancy is not mistaken for a Help Center decision; it
belongs to the main repository.

## Nav labels verified against code

`src/lib/constants/navigation.ts` is the source for every in-app label quoted in
the guides (`My Course Rosters`, `Manage CILOs`, `Evaluation Tools`,
`Submission History`, `Course roster members and current eligibility`,
`Confirm Term Rollover`, `Assign Faculty to Course`, `Import from CSV`,
`Deployed Evaluation Name`, `Activation (optional)`, `Deadline (optional)`,
`Respondent Preview`, `Publish Evaluation`, `Exclusions & late inclusion`,
`Archive Graduate Outcome`, `Drag rows to reorder`, `Deletion blocked`,
`Column guide`, `Request received`).