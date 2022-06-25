import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson'

export function Sidebar() {
  const { data } = useGetLessonsQuery()
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 ">
      <span className="block font-bold text-2xl pb-6 mb-6 border-b border-gray-500  ">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(item => {
          return (
            <Lesson
              key={item.id}
              title={item.title}
              lessonSlug={item.slug}
              availableAt={new Date(item.availableAt)}
              type={item.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
