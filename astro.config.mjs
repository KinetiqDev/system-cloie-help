// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

/**
 * Site URL is fixed to the Help Center's canonical domain. `SITE_URL` is only
 * needed for the pre-cutover project fallback URL, which GitHub Pages reports
 * through `actions/configure-pages`.
 */
const site = process.env.SITE_URL || 'https://help.system-cloie.app';
const base = (process.env.SITE_BASE ?? '/').trim().replace(/\/+$/, '');

// Roles are listed by the page's `role` frontmatter field; each role section is
// collapsed into one sidebar group so the tree stays scannable.
/**
 * @param {string} label
 * @param {{ label: string; slug: string }[]} items
 */
const roleGroup = (label, items) => ({
  label,
  collapsed: true,
  items: [{ label, collapsed: true, items }],
});

export default defineConfig({
  site,
  base: base === '' ? '/' : base,
  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: 'System CLOIE Help',
      description:
        'Plain-language guides for every System CLOIE role: what the page is for, what you are allowed to do, and what happens next.',
      logo: { src: './src/assets/cloie-logo.svg', alt: 'System CLOIE' },
      favicon: '/brand/favicon.svg',
      customCss: ['./src/styles/tokens.css', './src/styles/theme.css'],
      components: { MarkdownContent: './src/components/MarkdownContent.astro' },
      editLink: {
        baseUrl:
          'https://github.com/KinetiqDev/system-cloie-help/edit/main/src/content/docs/',
      },
      lastUpdated: true,
      credits: false,
      sidebar: [
        {
          label: 'Start here',
          collapsed: false,
          items: [
            { label: 'Overview', slug: 'start' },
            { label: 'What is System CLOIE?', slug: 'start/what-is-system-cloie' },
            { label: 'Choose your role', slug: 'start/choose-your-role' },
            { label: 'Sign in', slug: 'start/sign-in' },
            { label: 'Switch active role', slug: 'start/switch-active-role' },
            { label: 'Complete your profile', slug: 'start/complete-your-profile' },
            { label: 'Understand access', slug: 'start/understand-access' },
          ],
        },
        {
          label: 'Concepts',
          collapsed: true,
          items: [{ autogenerate: { directory: 'concepts' } }],
        },
        {
          label: 'Workflows',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'workflows' },
            { label: 'Course evaluation lifecycle', slug: 'workflows/course-evaluation' },
            { label: 'Program-wide evaluation', slug: 'workflows/program-wide-evaluation' },
            { label: 'Academic period transition', slug: 'workflows/academic-period-transition' },
            { label: 'Student to Alumni', slug: 'workflows/student-to-alumni' },
          ],
        },
        {
          label: 'Troubleshooting',
          collapsed: true,
          items: [{ autogenerate: { directory: 'troubleshooting' } }],
        },
        roleGroup('Secretary', [
          { label: 'Secretary guide', slug: 'secretary' },
          { label: 'Manage users', slug: 'secretary/users' },
          { label: 'Create a user account', slug: 'secretary/create-user' },
          { label: 'Review Faculty requests', slug: 'secretary/faculty-requests' },
          { label: 'Manage school years', slug: 'secretary/academic-calendar' },
          { label: 'Run term rollover', slug: 'secretary/term-rollover' },
          { label: 'Manage programs', slug: 'secretary/programs' },
          { label: 'Manage Courses', slug: 'secretary/courses' },
          { label: 'View Course assignments', slug: 'secretary/course-assignments' },
          { label: 'Institutional evaluation tools', slug: 'secretary/evaluation-tools' },
        ]),
        roleGroup('College Dean', [
          { label: 'Dean guide', slug: 'dean' },
          { label: 'Dean dashboard', slug: 'dean/dashboard' },
          { label: 'Academic structure', slug: 'dean/academic-structure' },
          { label: 'Course assignments', slug: 'dean/course-assignments' },
          { label: 'Learning outcome oversight', slug: 'dean/learning-outcomes' },
          { label: 'Institutional evaluation tools', slug: 'dean/evaluation-tools' },
        ]),
        roleGroup('General Education Coordinator', [
          { label: 'Coordinator guide', slug: 'gen-ed-coordinator' },
          { label: 'Institutional Learning Outcomes', slug: 'gen-ed-coordinator/outcomes' },
          { label: 'General Education alignment review', slug: 'gen-ed-coordinator/outcome-alignment' },
          { label: 'General Education Courses', slug: 'gen-ed-coordinator/courses' },
          { label: 'General Education Course assignments', slug: 'gen-ed-coordinator/course-assignments' },
          { label: 'General Education analytics', slug: 'gen-ed-coordinator/analytics' },
        ]),
        roleGroup('Program Head', [
          { label: 'Program Head guide', slug: 'program-head' },
          { label: 'Select your program', slug: 'program-head/select-program' },
          { label: 'Program dashboard', slug: 'program-head/dashboard' },
          { label: 'Program Courses', slug: 'program-head/courses' },
          { label: 'Program Course assignments', slug: 'program-head/course-assignments' },
          { label: 'Graduate Outcomes', slug: 'program-head/outcomes' },
          { label: 'CILO alignment review', slug: 'program-head/outcome-alignment' },
          { label: 'Program evaluation tools', slug: 'program-head/tools' },
          { label: 'Publish a Program-wide evaluation', slug: 'program-head/publish-program-evaluation' },
          { label: 'Review responses', slug: 'program-head/responses' },
          { label: 'Program analytics', slug: 'program-head/analytics' },
          { label: 'Reports (not yet available)', slug: 'program-head/reports' },
        ]),
        roleGroup('Faculty Member', [
          { label: 'Faculty guide', slug: 'faculty' },
          { label: 'Course rosters', slug: 'faculty/course-rosters' },
          { label: 'Course Intended Learning Outcomes', slug: 'faculty/cilos' },
          { label: 'Align CILOs with outcomes', slug: 'faculty/outcome-alignment' },
          { label: 'Evaluation tools', slug: 'faculty/tools' },
          { label: 'Publish a Course evaluation', slug: 'faculty/publish-course-evaluation' },
          { label: 'Review a published evaluation', slug: 'faculty/review-evaluation' },
          { label: 'Faculty analytics', slug: 'faculty/analytics' },
        ]),
        roleGroup('Student', [
          { label: 'Student guide', slug: 'student' },
          { label: 'Student dashboard', slug: 'student/dashboard' },
          { label: 'Available evaluations', slug: 'student/evaluations' },
          { label: 'Complete an evaluation', slug: 'student/complete-evaluation' },
          { label: 'Save a draft', slug: 'student/save-draft' },
          { label: 'Review and submit', slug: 'student/submit' },
          { label: 'Submission history', slug: 'student/history' },
          { label: 'Graduating Student evaluations', slug: 'student/graduating' },
        ]),
        roleGroup('Alumni', [
          { label: 'Alumni guide', slug: 'alumni' },
          { label: 'Alumni account', slug: 'alumni/account' },
          { label: 'Alumni evaluations', slug: 'alumni/evaluations' },
          { label: 'Submission history', slug: 'alumni/history' },
        ]),
        roleGroup('Industry Partner', [
          { label: 'Industry Partner guide', slug: 'industry-partner' },
          { label: 'Industry Partner account', slug: 'industry-partner/account' },
          { label: 'Industry Partner evaluations', slug: 'industry-partner/evaluations' },
          { label: 'Submission history', slug: 'industry-partner/history' },
        ]),
        { label: 'Videos', collapsed: true, items: [{ label: 'Video guides', slug: 'videos' }] },
      ],
    }),
  ],
});