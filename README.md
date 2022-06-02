```bash
git clone https://github.com/lorisCocco/bdoe616.git
npm i
npm start
```

#Routes

```ts
const API_URL = "http://localhost:8000";
```

###Auth

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
// Delete user's account
const URL = `${API_URL}/auth/delete`;

interface DeleteObject = {
  id: number;
}

```

###Agenda

```ts
// GET
// Return user agenda
const URL = `${API_URL}/agenda`;
```

###Contact

```ts
// GET
// Return a list of all contacts
const URL = `${API_URL}/contacts`;

// Return contact by id
const URL = `${API_URL}/contacts/:id`;

// POST
// Add contact
const URL = `${API_URL}/contacts`:

interface Coordinates = {
  address : string[];
  phone : string[];
  email : string[];
  websites : string[];
}

interface AddContactObject = {
  name:string;
  coordinates: Coordinates;
}

// PATCH
// Modify a contact's informations by contact's id
const URL = `${API_URL}/contacts`:

interface Coordinates = {
  address : string[];
  phone : string[];
  email : string[];
  websites : string[];
}

interface EditContactObject = {
  id: number;
  name:string;
  coordinates: Coordinates;
}

// Delete
// Delete a contact from user's contact by contact's id
const URL = `${API_URL}/contacts`:

interface DeleteObject = {
  id: number;
}
```
