const initialEmails = [
  {
    id: "1",
    sender: "HR TechCorp",
    subject: "URGENT: Submit Q4 Performance Assessment",
    body: "Please complete your quarterly review before 5 PM today to avoid delay in processing.",
    date: "08:15 AM",
    isRead: false,
    isStarred: true,
  },
  {
    id: "2",
    sender: "Alex Dev",
    subject: "Code Review - PR #402 DOM Refactoring",
    body: "Hey, can you take a look at the event delegation implementation when you have time?",
    date: "08:42 AM",
    isRead: false,
    isStarred: false,
  },
  {
    id: "3",
    sender: "GitHub Notifications",
    subject: "[IMPORTANT] Security alert on repository main branch",
    body: "We detected a potential dependency vulnerability in package.json. Please update immediately.",
    date: "09:05 AM",
    isRead: false,
    isStarred: true,
  },
  {
    id: "4",
    sender: "Sarah Product Lead",
    subject: "Sprint Planning Alignment for Next Week",
    body: "Let's align our backlog items for DOMailer milestone 2 tomorrow at 10 AM.",
    date: "09:30 AM",
    isRead: true,
    isStarred: false,
  },
  {
    id: "5",
    sender: "Figma Team",
    subject: "New comments on DOMailer UI Wireframes",
    body: "Sarah left 3 new comments on the table view layout component.",
    date: "10:00 AM",
    isRead: true,
    isStarred: false,
  },
  {
    id: "6",
    sender: "DevOps Ops",
    subject: "Staging Server Maintenance Notice",
    body: "Staging environment will be down for scheduled upgrades tonight between 11 PM and 1 AM.",
    date: "10:15 AM",
    isRead: true,
    isStarred: false,
  },
  {
    id: "7",
    sender: "Client Support",
    subject: "URGENT: Login issue reported on production",
    body: "Multiple users are reporting intermittent 500 errors when submitting the login form.",
    date: "10:45 AM",
    isRead: false,
    isStarred: true,
  },
  {
    id: "8",
    sender: "Slack Workspace",
    subject: "Weekly Activity Digest for TechCorp",
    body: "Here is your weekly summary: 142 new messages across 8 active channels.",
    date: "11:20 AM",
    isRead: true,
    isStarred: false,
  },
  {
    id: "9",
    sender: "Finance Department",
    subject: "Reimbursement Claim Approved",
    body: "Your internet allowance claim for last month has been processed and approved.",
    date: "11:50 AM",
    isRead: true,
    isStarred: true,
  },
  {
    id: "10",
    sender: "Radian QA",
    subject: "Bug Report: Checkbox bulk selection bug",
    body: "When select all is checked, unchecking one row does not update the master checkbox state.",
    date: "12:10 PM",
    isRead: false,
    isStarred: false,
  },
  {
    id: "11",
    sender: "Google Calendar",
    subject: "Reminder: All-Hands Meeting in 30 minutes",
    body: "Company updates and Q&A session with the executive team. Zoom link attached.",
    date: "01:30 PM",
    isRead: false,
    isStarred: false,
  },
  {
    id: "12",
    sender: "Jessica TechCorp",
    subject: "Design System Guidelines v2.0",
    body: "Check out the updated color tokens and button states for DOMailer dark mode.",
    date: "02:00 PM",
    isRead: true,
    isStarred: false,
  },
  {
    id: "13",
    sender: "Vercel Deployments",
    subject: "Deployment successful for domailer-staging",
    body: "Your commit 'fix: update event listener logic' was successfully deployed to production preview.",
    date: "02:25 PM",
    isRead: true,
    isStarred: false,
  },
  {
    id: "14",
    sender: "IT Helpdesk",
    subject: "IMPORTANT: Password Reset Required",
    body: "Your corporate account password will expire in 3 days. Please update it via portal.",
    date: "03:10 PM",
    isRead: false,
    isStarred: true,
  },
  {
    id: "15",
    sender: "Medium Daily",
    subject: "Top stories in JavaScript Performance & DOM Optimization",
    body: "Discover why event delegation improves memory management in heavy web applications.",
    date: "Yesterday",
    isRead: true,
    isStarred: false,
  },
  {
    id: "16",
    sender: "Michael Lead Dev",
    subject: "Architecture Review Feedback",
    body: "Great job on keeping the code modular. Let's optimize the filter algorithm next.",
    date: "Yesterday",
    isRead: true,
    isStarred: true,
  },
  {
    id: "17",
    sender: "Notion Updates",
    subject: "Page shared with you: DOMailer Documentation",
    body: "Michael shared 'DOMailer Component Lifecycle' page with your workspace.",
    date: "Yesterday",
    isRead: true,
    isStarred: false,
  },
  {
    id: "18",
    sender: "HR TechCorp",
    subject: "Town Hall Feedback Survey",
    body: "We value your input! Take 2 minutes to fill out the anonymous feedback form.",
    date: "Yesterday",
    isRead: true,
    isStarred: false,
  },
  {
    id: "19",
    sender: "LinkedIn Jobs",
    subject: "New Frontend Developer roles matching your profile",
    body: "Explore 5 new remote opportunities matching Senior Vanilla JavaScript Developer.",
    date: "2 days ago",
    isRead: true,
    isStarred: false,
  },
  {
    id: "20",
    sender: "NPM Registry",
    subject: "[URGENT] Deprecation notice for package user-event",
    body: "Version 12.x of user-event is now deprecated. Please upgrade to version 14.x immediately.",
    date: "2 days ago",
    isRead: false,
    isStarred: false,
  },
  {
    id: "21",
    sender: "David Frontend",
    subject: "Question about DOM traversal methods",
    body: "Should we prefer closest() over parentElement for nested table rows in DOMailer?",
    date: "2 days ago",
    isRead: true,
    isStarred: false,
  },
  {
    id: "22",
    sender: "Spotify for Work",
    subject: "Your Weekly Focused Coding Playlist",
    body: "Deep focus beats curated for frontend engineering sessions.",
    date: "3 days ago",
    isRead: true,
    isStarred: false,
  },
  {
    id: "23",
    sender: "AWS Billing",
    subject: "Monthly Invoice Available for Account #8902",
    body: "Your monthly usage statement for September is available for download.",
    date: "3 days ago",
    isRead: true,
    isStarred: false,
  },
  {
    id: "24",
    sender: "TechCorp Security",
    subject: "IMPORTANT: 2FA Enrollment Notice",
    body: "Two-Factor Authentication will be enforced for all developer accounts starting Friday.",
    date: "4 days ago",
    isRead: false,
    isStarred: true,
  },
  {
    id: "25",
    sender: "Postman Team",
    subject: "Collection DOMailer API Mock shared",
    body: "Alex updated the response schemas for GET /emails and POST /emails/compose.",
    date: "4 days ago",
    isRead: true,
    isStarred: false,
  },
  {
    id: "26",
    sender: "Coursera Tech",
    subject: "Certificate earned: Advanced JavaScript Data Structures",
    body: "Congratulations! Your certificate is ready to be shared on your LinkedIn profile.",
    date: "5 days ago",
    isRead: true,
    isStarred: true,
  },
  {
    id: "27",
    sender: "Dribbble Digest",
    subject: "Minimalist Dashboard Design Inspiration",
    body: "Top 10 clean table and inbox UI designs selected by the community this week.",
    date: "5 days ago",
    isRead: true,
    isStarred: false,
  },
  {
    id: "28",
    sender: "Office Facilities",
    subject: "Desk Allocation Update for Q4",
    body: "Please review your new seat assignment for the Engineering floor in Building B.",
    date: "6 days ago",
    isRead: true,
    isStarred: false,
  },
  {
    id: "29",
    sender: "Sentry Error Tracker",
    subject: "URGENT: Unhandled TypeException in Production",
    body: "New exception caught in app.js at line 84: Cannot read properties of null.",
    date: "Oct 01",
    isRead: false,
    isStarred: true,
  },
  {
    id: "30",
    sender: "TechCorp Onboarding",
    subject: "Welcome to TechCorp Engineering Team!",
    body: "Welcome aboard! Here are all the resources to get your local environment set up.",
    date: "Sep 28",
    isRead: true,
    isStarred: true,
  },
];
let emails = [...initialEmails];
let selected_emails = [];
let current_id = initialEmails.length;

const container = document.getElementById("email-list");
const unread_count = document.getElementById("unread");
const starred_count = document.getElementById("starred");

const all_opt = document.getElementById("all-option");
const unread_opt = document.getElementById("unread-option");
const starred_opt = document.getElementById("starred-option");
const compose_opt = document.getElementById("compose-option");

const compose_menu = document.getElementById("compose-menu");
const sender = document.getElementById("sender");
const subject = document.getElementById("subject");
const body = document.getElementById("body");

const select_all = document.getElementById("select-all");

const selected_ops = document.getElementById("selected-ops");
const selected_count = document.getElementById("selected-count");
const selected_read = document.getElementById("selection-button-mark-read");
const selected_delete = document.getElementById("selection-button-delete");

const search = document.getElementById("search");

unread_count.innerText = emails.filter((e) => e.isRead === false).length;
starred_count.innerText = emails.filter((e) => e.isStarred === true).length;

// Membuat tampilan awal
emails.forEach((e) => {
  create_email(
    e.id,
    e.sender,
    e.subject,
    e.body,
    e.date,
    e.isRead,
    e.isStarred,
  );
});
all_opt.checked = true;
unread_opt.checked = false;
starred_opt.checked = false;
compose_opt.checked = false;
select_all.checked = false;

// Navigasi event
all_opt.addEventListener("click", () => {
  if (all_opt.checked == false) {
    all_opt.checked = true;
    return;
  }
  container.innerText = "";
  unread_opt.checked = false;
  starred_opt.checked = false;
  compose_opt.checked = false;
  compose_menu.style.display = compose_opt.checked ? "block" : "none";
  render();
  select_all.checked = false;
});
unread_opt.addEventListener("click", () => {
  if (unread_opt.checked == false) {
    unread_opt.checked = true;
    return;
  }
  container.innerText = "";
  all_opt.checked = false;
  starred_opt.checked = false;
  compose_opt.checked = false;
  compose_menu.style.display = compose_opt.checked ? "block" : "none";
  render();
  select_all.checked = false;
});
starred_opt.addEventListener("click", () => {
  if (starred_opt.checked == false) {
    starred_opt.checked = true;
    return;
  }
  container.innerText = "";
  all_opt.checked = false;
  unread_opt.checked = false;
  compose_opt.checked = false;
  compose_menu.style.display = compose_opt.checked ? "block" : "none";
  render();
  select_all.checked = false;
});
compose_opt.addEventListener("click", () => {
  compose_menu.style.display = compose_opt.checked ? "block" : "none";
});

// Selection event
select_all.addEventListener("click", () => {
  // Memastikan hanya email yang terlihat saja yang terpilih
  if (select_all.checked === true) {
    const search_v = search.value.trim().toLowerCase();
    let render_emails;
    if (all_opt.checked === true) {
      render_emails = emails;
    } else if (unread_opt.checked === true) {
      render_emails = emails.filter((e) => e.isRead === false);
    } else {
      render_emails = emails.filter((e) => e.isStarred === true);
    }

    if (search_v !== "") {
      render_emails = render_emails.filter(
        (m) =>
          m.subject.toLowerCase().includes(search_v) ||
          m.sender.toLowerCase().includes(search_v),
      );
    }

    selected_emails = render_emails.map((e) => e.id);
  } else {
    selected_emails = [];
  }
  update_selection_ops();
  render();
});
selected_delete.addEventListener("click", () => {
  selected_emails.forEach((e) => {
    emails.splice(
      emails.findIndex((m) => m.id === e),
      1,
    );
  });
  selected_emails = [];
  select_all.checked = false;
  update_counting();
  update_selection_ops();
  render();
});
selected_read.addEventListener("click", () => {
  selected_emails.forEach(
    (e) => (emails[emails.findIndex((m) => m.id === e)].isRead = true),
  );
  update_counting();
  update_selection_ops();
  render();
});

search.addEventListener("input", () => {
  render();
});

// Event delegation
container.addEventListener("click", (e) => {
  const email = e.target.closest(".email-row");
  if (!email) return;
  // Read email
  if (
    !e.target.classList.contains("selection-check") &&
    !e.target.classList.contains("delete") &&
    !e.target.classList.contains("star")
  ) {
    const index = emails.findIndex((m) => m.id === email.dataset.id);
    emails[index].isRead = !emails[index].isRead;
    email.style.fontWeight = emails[index].isRead ? "normal" : "bold";
    email.style.color = emails[index].isRead ? "grey" : "black";
    render();
  }
  // Selection email
  else if (e.target.classList.contains("selection-check")) {
    if (e.target.checked === true) {
      if (!selected_emails.includes(email.dataset.id)) {
        selected_emails.push(email.dataset.id);
      }
    } else {
      if (selected_emails.includes(email.dataset.id)) {
        selected_emails = selected_emails.filter((e) => e !== email.dataset.id);
      }
    }
    update_selection_ops();
  }
  // Delete email
  else if (e.target.classList.contains("delete")) {
    emails = emails.filter((m) => m.id !== email.dataset.id);
    if (selected_emails.includes(email.dataset.id)) {
      selected_emails = selected_emails.filter((m) => m !== email.dataset.id);
    }
    render();
    update_selection_ops();
  }
  // Star email
  else if (e.target.classList.contains("star")) {
    const index = emails.findIndex((d) => d.id === email.dataset.id);
    emails[index].isStarred = !emails[index].isStarred;
    render();
  }
});

// Form email baru
compose_menu.addEventListener("submit", (e) => {
  e.preventDefault();
  current_id += 1;
  emails = [
    {
      id: "" + current_id,
      sender: sender.value,
      subject: subject.value,
      body: body.value,
      date: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isRead: false,
      isStarred: false,
    },
    ...emails,
  ];
  compose_menu.style.display = "none";
  compose_opt.checked = false;
  sender.value = "";
  subject.value = "";
  body.value = "";
  render();
});

function update_counting() {
  unread_count.innerText = emails.filter((e) => e.isRead === false).length;
  starred_count.innerText = emails.filter((e) => e.isStarred === true).length;
}

function update_selection_ops() {
  if (selected_emails.length > 0) {
    selected_ops.style.display = "block";
    selected_count.innerText = selected_emails.length;
  } else {
    selected_ops.style.display = "none";
  }
}

function render() {
  const search_v = search.value.trim().toLowerCase();
  update_counting();
  container.innerText = "";
  let render_emails;

  if (all_opt.checked === true) {
    render_emails = emails;
  } else if (unread_opt.checked === true) {
    render_emails = emails.filter((e) => e.isRead === false);
  } else {
    render_emails = emails.filter((e) => e.isStarred === true);
  }

  if (search_v !== "") {
    render_emails = render_emails.filter(
      (m) =>
        m.subject.toLowerCase().includes(search_v) ||
        m.sender.toLowerCase().includes(search_v),
    );
  }

  render_emails.forEach((e) =>
    create_email(
      e.id,
      e.sender,
      e.subject,
      e.body,
      e.date,
      e.isRead,
      e.isStarred,
    ),
  );
}

function create_email(id, sender, subject, body, date, isRead, isStarred) {
  const important = subject.includes("URGENT") || subject.includes("IMPORTANT");
  const tr = document.createElement("tr");
  const td_starred = document.createElement("td");
  const td_sender = document.createElement("td");
  const td_subject = document.createElement("td");
  const td_date = document.createElement("td");
  const td_action = document.createElement("td");
  const td_check = document.createElement("td");

  const node_sender = document.createTextNode(sender);
  const node_date = document.createTextNode(date);
  const element_check = document.createElement("input");

  const node_starred = document.createTextNode("*");
  const element_starred = document.createElement("p");

  const element_action = document.createElement("p");
  const node_action = document.createTextNode("Delete");

  const element_subject = document.createElement("p");
  const node_subject = document.createTextNode(subject);

  const element_body = document.createElement("p");
  const node_body = document.createTextNode(body);

  element_starred.appendChild(node_starred);
  element_starred.classList.add("star");

  element_action.appendChild(node_action);
  element_action.classList.add("delete");

  element_subject.appendChild(node_subject);
  element_body.appendChild(node_body);

  element_body.style.fontWeight = "normal";
  element_body.style.fontSize = "12px";

  element_check.setAttribute("type", "checkbox");
  element_check.classList.add("selection-check");

  element_check.checked = selected_emails.includes(id);

  if (important) {
    const element_span = document.createElement("span");
    const node_span = document.createTextNode("IMPORTANT/URGENT");
    element_span.appendChild(node_span);
    element_span.classList.add("important");
    element_span.style.fontWeight = "bold";
    td_subject.appendChild(element_span);
  }

  element_starred.style.color = isStarred ? "red" : "black";
  element_starred.style.fontWeight = "bold";

  td_starred.appendChild(element_starred);
  td_sender.appendChild(node_sender);
  td_subject.appendChild(element_subject);
  td_subject.appendChild(element_body);
  td_date.appendChild(node_date);
  td_action.appendChild(element_action);
  td_check.appendChild(element_check);

  td_action.style.fontSize = "14px";
  td_action.style.color = "red";
  td_action.style.fontWeight = "normal";

  tr.appendChild(td_check);
  tr.appendChild(td_starred);
  tr.appendChild(td_sender);
  tr.appendChild(td_subject);
  tr.appendChild(td_date);
  tr.appendChild(td_action);
  tr.setAttribute("data-id", id);

  tr.style.fontWeight = isRead ? "normal" : "bold";
  tr.style.color = isRead ? "grey" : "black";
  tr.classList.add("email-row");

  container.appendChild(tr);
}
