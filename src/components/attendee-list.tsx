import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"

export function AttendeeList() {
  return(
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300"/>
          <input className="bg-transparent flex-1 outline-none outline-0 border-0 p-0 text-sm" placeholder="Buscar participante..." />
        </div>
      </div>

      {/* Não da pra colocar borda arredondada em tabela, então colocamos a tabela numa div e o arredondamento na div */}
      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th style={{ width: 48 }} className="py-3 px-4 text-sm font-semibold text-left">
                <input type="checkbox" className="size-4 bg-orange/20 rounded border border-white/10 focus-visible:outline-none checked:text-orange-400 focus:ring-0 focus:ring-offset-0" />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data de inscrição</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data do check-in</th>
              <th style={{ width: 64 }} className="py-3 px-4 text-sm font-semibold text-left"></th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 10 }).map((_, i) => {
              return(
                <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <input type="checkbox" className="size-4 bg-orange/20 rounded border border-white/10 focus-visible:outline-none checked:text-orange-400 focus:ring-0 focus:ring-offset-0" />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">10313</td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">Michelle Laignier</span>
                      <span>michelle@rocketseat.com.br</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</td>
                  <td className="py-3 px-4 text-sm text-zinc-300">3 dias atrás</td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <button className="bg-orange-900 border border-white/10 rounded-md p-1.5">
                      <MoreHorizontal className="size-4"/>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>

          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
                Mostrando 10 de 228 itens
              </td>
              <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 23</span>

                  <div className="flex gap-1.5">
                    <button className="bg-orange-900/30 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft className="size-4"/>
                    </button>
                    <button className="bg-orange-900/30 border border-white/10 rounded-md p-1.5">
                      <ChevronLeft className="size-4"/>
                    </button>
                    <button className="bg-orange-900/70 border border-white/10 rounded-md p-1.5">
                      <ChevronRight className="size-4"/>
                    </button>
                    <button className="bg-orange-900/70 border border-white/10 rounded-md p-1.5">
                      <ChevronsRight className="size-4"/>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}