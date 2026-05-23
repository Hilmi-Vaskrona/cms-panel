"use client";

const berita = [
  {
    id: 1,
    title: "Teknologi AI",
    createdAt: "2026-05-16",
  },
  {
    id: 2,
    title: "Berita Pendidikan",
    createdAt: "2026-05-15",
  },
];

export default function NewsTable() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-8">
      <h2 className="text-xl font-bold mb-6">
        List Berita
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">
              Judul
            </th>

            <th className="text-left py-3">
              Tanggal
            </th>

            <th className="text-left py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {berita.map((item) => (
            <tr
              key={item.id}
              className="border-b"
            >
              <td className="py-4">
                {item.title}
              </td>

              <td>
                {item.createdAt}
              </td>

              <td className="flex gap-2 py-4">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>

                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}