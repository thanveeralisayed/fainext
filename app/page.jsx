import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-col flex-center">
        <h1 className="head_text text-center">Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            An open source AI prompting tool
        </p>

        <Feed/>
    </section>
  )
}

export default Home