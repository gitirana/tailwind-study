import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/gitirana.png"
        alt=""
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Thayná Gitirana
        </span>
        <span className="truncate text-sm text-zinc-500">
          thaynalgitirana@gmail.com
        </span>
      </div>

      <button
        type="button"
        className="group ml-auto rounded-md p-2 hover:bg-red-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500 group-hover:text-red-500" />
      </button>
    </div>
  )
}
