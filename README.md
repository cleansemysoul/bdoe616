```bash
git clone https://github.com/lorisCocco/bdoe616.git
npm i
npm start
```

```ts
const TEST_USER = "VlMta9kiJKpppr5cFnMh";
```

#Routes

```ts
const API_URL = "http://localhost:8000";
```

##Auth

```ts
// POST
// Login
const URL = `${API_URL}/auth/login`;

interface LoginObject = {
  username: string;
  password: string;
}

// POST
// Logout
const URL = `${API_URL}/auth/logout`;

interface LogoutObject = {
  id: number;
}

// POST
// Create
const URL = `${API_URL}/auth/create`;

interface CreateObject = {
  userName: string;
}

// PATCH
// Create
const URL = `${API_URL}/auth/update`;

interface UpdateObject = {
  id: string;
  username: string;
}

// POST
// Delete user's account
const URL = `${API_URL}/auth/delete`;

interface DeleteObject = {
  id: number;
}

```

##Agenda

```ts
// GET
// Return user agenda by id
const URL = `${API_URL}/agendas/:id`;

// Post
// Add an event to the user's agenda
const URL = `${API_URL}/agendas`;

interface ContactObject = {
  belongsTo: string;
  date: TIMESTAMP;
  title: string;
}

const ContactObject = {
  belongsTo: TEST_USER,
  title: "Mon nouvel event 3",
  date: "Thu Jun 23 2022 16:49:40 GMT+0200 (heure d’été d’Europe centrale)"
}
```

##Contact

```ts
// GET
// Return a list of all contacts by user id
const URL = `${API_URL}/contacts/users/:id`;

// Return contact by id
const URL = `${API_URL}/contacts/:id`;

// POST
// Add contact
const URL = `${API_URL}/contacts`:

interface ContactObject = {
  belongsTo: string;
  name: string;
  address: string[];
  phone: string[];
  email: string[];
  websites: string[];
}

const ExampleObject = {
  belongsTo: TEST_USER,
  name: "A",
  address: ["B", "C"],
  phone: ["0612345678"],
  email: ["email@test.test"],
  website: ["rue de paris"]
}

// PATCH
// Modify a contact's informations by contact's id
const URL = `${API_URL}/contacts`:

interface ContactObject = {
  id: number;
  name: string;
  address: string[];
  phone: string[];
  email: string[];
  websites: string[];
}

const ExampleObject = {
  id: "9pQfFSqoepzracxZYwFk",
  name: "B",
  address: [],
  phone: [],
  email: [],
  website: ["test.com"]
}

// DELETE
// Delete a contact by contact's id
const URL = `${API_URL}/contacts/:id`:

```
