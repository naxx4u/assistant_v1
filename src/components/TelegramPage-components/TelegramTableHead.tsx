export const TelegramTableHead = () => {
  return (
    <>
      <thead>
    <tr className="border-2 border-slate-700 bg-sky-500 text-white/90 xl:text-lg sm:text-sm">
      <th className="border-2 px-2 border-slate-700">Test</th>
      <th className="border-2 px-2 border-slate-700">Телефон</th>
      <th className="sm:hidden xl:table-cell   px-2 border-slate-700">CID</th>
      <th className="sm:hidden xl:table-cell  border px-2 border-slate-700">Дозволи</th>
      <th className="border-2 px-2 border-slate-700">Ім'я </th>
      <th className="border-2 px-2 border-slate-700">В службовій</th>
    </tr>
  </thead>
    </>
  )
}
