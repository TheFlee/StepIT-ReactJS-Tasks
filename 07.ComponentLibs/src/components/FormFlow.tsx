import { Checkbox, Label, TextInput, Button } from "flowbite-react";

const FormFlow = () => {
  return (
    <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
      <Label className="text-3xl flex justify-center mb-4">Log In</Label>
      <form className="flex max-w-md flex-col gap-4 w-75">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1">Your email</Label>
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1">Your password</Label>
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default FormFlow