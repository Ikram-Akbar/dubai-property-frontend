
import Button  from "../common/Button"

 const Newsletter = () => (
  <section className="py-16 bg-dark border-t border-primary/10 text-center">
    <h3 className="text-xl mb-6 text-gray-300">
      Sign up for exclusive updates and information about the newest projects in Dubai
    </h3>
    <div className="flex justify-center gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-3 rounded-md bg-dark border border-gray-600 w-80 text-gray-200"
      />
      <Button>Subscribe</Button>
    </div>
  </section>
)


export default Newsletter;