import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Harsh Bhat
      </h1>
      <p className="mb-4">
        {`Hi there, I'm Harsh Bhat, and I'm about to finish my Bachelor's in Computer Science and Engineering. By the way, I love open source and NextJs!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
