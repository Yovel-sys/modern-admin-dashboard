function App() {
  return (
    // 'flex' גורם לשני החלקים לעמוד אחד ליד השני. 'h-screen' תופס את כל גובה המסך.
    <div className="flex h-screen bg-gray-100">
      {/* תפריט צד -Sidebar (לבן, ברוחב קבוע) */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <h1 className="text-xl font-bold text-blue-600 mb-6">הדאשבורד שלי</h1>
        <nav className="space-y-2">
          <div className="p-2 bg-blue-50 text-blue-700 rounded cursor-pointer">
            ראשי
          </div>
          <div className="p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
            הזמנות
          </div>
          <div className="p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
            הגדרות
          </div>
        </nav>
      </aside>

      {/* תוכן מרכזי - Main Content (אפור בהיר) */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">סקירה כללית</h2>
        </header>

        {/* כאן נשים בהמשך את הכרטיסיות והגרפים */}
        <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-200">
          <p className="text-gray-500">כאן יופיעו הנתונים שלנו בקרוב...</p>
        </div>
      </main>
    </div>
  );
}

export default App;
