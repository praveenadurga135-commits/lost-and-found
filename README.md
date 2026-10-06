# Lost and Found API

A RESTful API for managing lost and found items on a campus notice board.

Built using **Node.js, Express.js, and MongoDB**.

## 🚀 Features

- Create lost and found items
- Get all items
- Get a single item by ID
- Update an item
- Delete an item
- Filter items by type (`lost` / `found`)
- Sort items by reward
- Get pending items that have not been returned
- Input validation
- Centralized error handling
- MongoDB database integration

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Postman

## 📋 Data Model

Each item contains:

| Field | Type | Description |
|---|---|---|
| `item` | String | Name of the lost/found item |
| `reward` | Number | Reward amount (0–10000) |
| `type` | String | `lost` or `found` |
| `returned` | Boolean | Whether the item has been returned |
| `reportedOn` | Date | Date when the item was reported |

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/items` | Get all items |
| GET | `/items/pending` | Get items that are not returned |
| GET | `/items/:id` | Get a single item |
| POST | `/items` | Create an item |
| PUT | `/items/:id` | Update an item |
| DELETE | `/items/:id` | Delete an item |

## 🔎 Query Features

### Filter by Type

```http
GET /items?type=lost
```

Returns only the items with type `lost`.

### Sort by Reward

```http
GET /items?sort=reward
```

Returns items with the lowest reward first.

### Pending Items

```http
GET /items/pending
```

Returns only the items that have not been returned yet.

## 📂 Project Structure

```text
lost-and-found/
├── config/
│   └── db.js
├── controllers/
│   └── itemController.js
├── middleware/
│   └── errorHandler.js
├── models/
│   └── item.js
├── routes/
│   └── item.js
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## 📝 Example Request

### Create an Item

```http
POST /items
```

```json
{
  "item": "Black wallet",
  "reward": 200,
  "type": "lost"
}
```

### Example Response

```json
{
  "_id": "...",
  "item": "Black wallet",
  "reward": 200,
  "type": "lost",
  "returned": false,
  "reportedOn": "2026-10-06T07:11:44.894Z"
}
```

## ✅ Validation

- `item` is required
- `reward` is required
- `reward` must be between `0` and `10000`
- `type` must be either `lost` or `found`
- Invalid MongoDB IDs return `400 Bad Request`
- Non-existent items return `404 Not Found`

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/praveenadurga135-commits/lost-and-found.git
```

Navigate to the project directory:

```bash
cd lost-and-found
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

Start the server:

```bash
npm start
```

For development:

```bash
npm run dev
```

## 🧪 Testing

The API can be tested using **Postman**.

### Available Requests

```text
POST   /items
GET    /items
GET    /items/pending
GET    /items/:id
PUT    /items/:id
DELETE /items/:id
```

## 👩‍💻 Author

**M. Praveena Durga**

B.Tech CSE (Artificial Intelligence & Machine Learning)