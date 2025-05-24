# 🚀 AeroSense Monitoring App

**AeroSense** is a smart environmental monitoring application designed to provide **real-time insights** into ambient conditions such as **temperature**, **humidity**, **air quality**, and **fire-related hazards** like **smoke**, **LPG**, and **kerosene** presence.

---

## 🔗 Demo

🌐 **Live Demo**: [https://aerosense-thesis.vercel.appp](https://aerosense-thesis.vercel.app)

> Deployed with ❤️ on [Vercel](https://vercel.com)

---

## 🧩 Features

* 🔐 **User Authentication**
  Secure login and registration using **Supabase Auth**.

* 📊 **Real-Time Dashboard Monitoring**
  Live updates for:

  * 🌡️ Temperature & 💧 Humidity (via DHT22 sensor)
  * 🌫️ Air Quality & 🔥 Fire Hazards (via MQ-series gas sensors for Smoke, LPG, and Kerosene)

* ⚙️ **Profile Settings**
  Manage personal information and preferences.

* 🔗 **API & Database Integration**
  Sensor data is collected and sent to the **Supabase Database** via RESTful API and displayed in real-time.

---

## 🧪 Hardware Setup

* **Microcontroller**: Arduino (programmed using Arduino IDE)
* **Sensors Used**:

  * `DHT22` – Temperature and Humidity Sensor
  * `MQ-2`, `MQ-6`, etc. – Gas Sensors for:

    * Air Quality
    * Smoke
    * LPG (Liquefied Petroleum Gas)
    * Kerosene

Sensor readings are programmed in **Arduino**, and the data is sent to a cloud endpoint for use in the AeroSense web app.

---

## 🛠️ Tech Stack

* **Frontend**: React.js 
* **Backend/Database**: [Supabase](https://supabase.com/)
* **Authentication**: Supabase Auth
* **API**: Custom integration for fetching sensor data
* **Microcontroller Programming**: Arduino C++

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/aerosense-app.git
   cd aerosense-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file and add your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run the App**

   ```bash
   npm run dev
   ```

---

## 🔐 Security

All authentication and data operations are handled securely using **Supabase**. Role-based access policies are in place to protect sensitive data.

---

## 🧭 Future Improvements

* 🚨 Add real-time alerts (SMS/Email) for hazardous readings
* 📈 Include historical data visualization (charts, timelines)
* 👥 Admin panel for managing users and thresholds

---

## 🤝 Contributing

Feel free to fork the repository and open pull requests! For major changes, please open an issue first.

---

## 📬 Contact

For support or questions, contact us at \[[aerosense001@gmail.com](mailto:aerosense001@gmail.com)].
