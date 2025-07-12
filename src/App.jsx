import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([
    { name: "Alice", age: 24, city: "New York", country: "USA", bio: "Enjoys hiking." },
    { name: "Bob", age: 30, city: "London", country: "UK", bio: "Loves football." },
    { name: "Charlie", age: 28, city: "Paris", country: "France", bio: "Artist and traveler." },
    { name: "Diana", age: 22, city: "Berlin", country: "Germany", bio: "Student of history." },
    { name: "Ethan", age: 35, city: "Toronto", country: "Canada", bio: "Chef and food lover." },
    { name: "Fiona", age: 27, city: "Sydney", country: "Australia", bio: "Surfer and photographer." },
  ]);
  const [editIdx, setEditIdx] = useState(null);
  const [editRow, setEditRow] = useState({ name: "", age: "", city: "", country: "", bio: "" });

  const filteredData = data.filter(row =>
    Object.values(row).some(val =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleEdit = idx => {
    setEditIdx(idx);
    setEditRow({ ...data[idx] });
  };

  const handleSave = idx => {
    const newData = [...data];
    newData[idx] = { ...editRow };
    setData(newData);
    setEditIdx(null);
  };

  const handleCancel = () => {
    setEditIdx(null);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2em" }}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: "1em", padding: "0.5em", width: "200px" }}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Country</th>
            <th>Bio</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row, idx) => {
              // Find the index in the original data array
              const dataIdx = data.findIndex(d => d.name === row.name && d.age === row.age && d.city === row.city && d.country === row.country);
              return (
                <tr key={idx}>
                  <td>
                    {editIdx === dataIdx ? (
                      <input
                        type="text"
                        value={editRow.name}
                        onChange={e => setEditRow({ ...editRow, name: e.target.value })}
                        style={{ width: "100px" }}
                      />
                    ) : (
                      row.name
                    )}
                  </td>
                  <td>
                    {editIdx === dataIdx ? (
                      <input
                        type="number"
                        value={editRow.age}
                        onChange={e => setEditRow({ ...editRow, age: e.target.value })}
                        style={{ width: "60px" }}
                      />
                    ) : (
                      row.age
                    )}
                  </td>
                  <td>
                    {editIdx === dataIdx ? (
                      <input
                        type="text"
                        value={editRow.city}
                        onChange={e => setEditRow({ ...editRow, city: e.target.value })}
                        style={{ width: "100px" }}
                      />
                    ) : (
                      row.city
                    )}
                  </td>
                  <td>
                    {editIdx === dataIdx ? (
                      <input
                        type="text"
                        value={editRow.country}
                        onChange={e => setEditRow({ ...editRow, country: e.target.value })}
                        style={{ width: "100px" }}
                      />
                    ) : (
                      row.country
                    )}
                  </td>
                  <td>
                    {editIdx === dataIdx ? (
                      <textarea
                        value={editRow.bio}
                        onChange={e => setEditRow({ ...editRow, bio: e.target.value })}
                        style={{ width: "150px", height: "40px" }}
                        placeholder="Add bio..."
                      />
                    ) : (
                      row.bio || <span style={{ color: '#aaa' }}>No bio</span>
                    )}
                  </td>
                  <td>
                    {editIdx === dataIdx ? (
                      <>
                        <button onClick={() => handleSave(dataIdx)} style={{ marginRight: "0.5em" }}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                      </>
                    ) : (
                      <button onClick={() => handleEdit(dataIdx)}>Edit</button>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>No results found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App
