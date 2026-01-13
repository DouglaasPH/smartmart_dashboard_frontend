function NoFound() {
  return (
    <tr>
      <td colSpan={6} className="h-48">
        <div className="flex flex-col items-center justify-center text-center gap-2 h-full">
          <h4 className="font-semibold text-xl text-gray-700">
            Nenhum Produto encontrado.
          </h4>
        </div>
      </td>
    </tr>
  );
}

export default NoFound;
