import { ComponentProps } from "react";

interface TableProps extends ComponentProps<'table'> {}

export function Table(props: TableProps) {
  return(
    <div className="border border-white/10 rounded-lg">
      <table className="w-full" {...props}/>
    </div>
  )
}
{/* Não da pra colocar borda arredondada em tabela, então colocamos a tabela numa div e o arredondamento na div */}