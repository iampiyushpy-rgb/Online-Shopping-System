# 🚀 Project-Blueprint-Labs
**Target:** Mastering the Flask + MySQL E-commerce Architecture.

This folder is the "R&D" center for our Online Shopping System. It contains isolated experiments to understand how the Frontend talks to the Backend, and how the Backend talks to the Database.

---

## 🛠️ Learning Roadmap & Resources

| Topic | Key Concept | Recommended Resource (YouTube) | Why Learn This? |
| :--- | :--- | :--- | :--- |
| **Flask Basics** | Routes & Templates | [Corey Schafer: Flask Part 1](https://www.youtube.com/watch?v=MwZwr5Tvyxo) | To handle page navigation (URLs). |
| **Python & MySQL** | DB Connectivity | [Programming with Mosh: Python MySQL](https://www.youtube.com/watch?v=3S3ayN2S-2U) | To fetch and save real store data. |
| **Jinja2 Logic** | Dynamic HTML | [Coding with Lewis: Jinja2 Guide](https://www.youtube.com/watch?v=mC6wZ7iB_uA) | To show product lists using `{% for %}` loops. |
| **Bootstrap 5** | Responsive UI | [FreeCodeCamp: Bootstrap 5](https://www.youtube.com/watch?v=-qfEOE4PtxE) | To make the site "Professional & Attractive." |
| **Forms & POST** | Data Submission | [Flask Form Handling](https://www.youtube.com/watch?v=UIJGfj47W6Y) | To build the "Add Product" and "Login" features. |

---

## 🏗️ The Workflow We Are Controlling

To understand how our app works, follow this flow:



1. **The Browser:** User clicks "Add to Cart" or "View Admin."
2. **The Flask Route (`app.py`):** Python intercepts the click and decides which function to run.
3. **The Database (MySQL):** Python asks the database for data (DML) or updates it.
4. **The Template (HTML/Jinja2):** Python injects the data into the HTML and sends it back to the user.

---

## 📝 Practice Tasks for Team Members
- [ ] Create a `hello.py` to run a basic Flask server.
- [ ] Write a script to test if the `3307` port is reachable.
- [ ] Practice the `ALTER TABLE` command to add columns like `discount_price`.