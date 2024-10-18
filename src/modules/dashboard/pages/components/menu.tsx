import  { useState } from 'react';

interface DataRow {
  name: string;
  count: number;
}

export function Menu({data}: {data: DataRow[]}){

  const [selectedPeriod, setSelectedPeriod] = useState('2019-1');
  const [selectedLocation, setSelectedLocation] = useState('SANTA CRUZ');
  const [selectedFaculty, setSelectedFaculty] = useState('05 CIENCIAS EXACTAS Y TECNOLOGÍA');



  const totalCount = data.reduce((acc, row) => acc + row.count, 0);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Dropdown filters */}
      <div className="gap-4 mb-4">
        <div >
          <label htmlFor="period" className="block text-sm font-medium">
            Período
          </label>
          <select
            id="period"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="2019-1">2019-1</option>
            <option value="2020-1">2020-1</option>
            {/* Agregar más períodos aquí */}
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium">
            Localidad
          </label>
          <select
            id="location"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="SANTA CRUZ">SANTA CRUZ</option>
            <option value="COCHABAMBA">COCHABAMBA</option>
            {/* Agregar más localidades aquí */}
          </select>
        </div>

        <div>
          <label htmlFor="faculty" className="block text-sm font-medium">
            Facultad
          </label>
          <select
            id="faculty"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={selectedFaculty}
            onChange={(e) => setSelectedFaculty(e.target.value)}
          >
            <option value="05 CIENCIAS EXACTAS Y TECNOLOGÍA">05 CIENCIAS EXACTAS Y TECNOLOGÍA</option>
            {/* Agregar más facultades aquí */}
          </select>
        </div>
      </div>

      {/* Tabla de datos */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              Etiquetas de fila
            </th>
            <th className="px-4 py-2 text-right text-sm font-medium text-gray-500">
              Inscritos x Facultad
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2 text-sm text-gray-700">{row.name}</td>
              <td className="px-4 py-2 text-sm text-right text-gray-700">{row.count.toLocaleString()}</td>
            </tr>
          ))}
          {/* Total general */}
          <tr className="bg-gray-200 font-bold">
            <td className="px-4 py-2 text-sm">Total general</td>
            <td className="px-4 py-2 text-sm text-right">{totalCount.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
