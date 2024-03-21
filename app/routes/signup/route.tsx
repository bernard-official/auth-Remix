import { ActionFunctionArgs, json } from '@remix-run/node';
import { Form, Link } from '@remix-run/react'
import React from 'react'
import { Button } from '~/components/button'
import { Input, Label } from '~/components/input'
import { validate } from './validate';

export const meta = () => {
    return [{ title: "Tunes Signup" }]
};

export const action = async ({request}:ActionFunctionArgs) => {
    let formData = await request.formData()

    let email = String(formData.get('email')|| "");
    let password = String(formData.get('password')|| "");
    
    let errors = await validate(email,password);
    if (errors) {
        return json({ ok:false, errors}, 400)
    }
}

export default function Signup() {

  return (
    <div>
      <div className=''>
        <h2>Sign Up</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <Form className='space-y-6' method="post" >
            <div>
            <Label htmlFor='email'>
                Email Address{" "}
                
            </Label>
            <Input
            autoFocus
            id='email'
            name="email"
            type="email"
            autoComplete='email'
            aria-discribedby={""}
            required />
            </div>
            <div>
                <Label htmlFor='password'>
                    Password{" "}
                </Label>
                <Input 
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                aria-describedby='password-error'
                required />
            </div>
            <Button type='submit'>Sign in</Button>
            <div className='text-sm text-slate-500'>
              Already have an account? {" "}
              <Link className='underline' to='/login' >
              Log in</Link>
              .
            </div>
        </Form>
        </div>
      <div className="mt-8 space-y-2 mx-2">
          <h3 className="font-bold text-black">Privacy Notice</h3>
          <p>
            We won't use your email address for anything other than
            authenticating with this demo application. This app doesn't send
            email anyway, so you can put whatever fake email address you want.
          </p>
          <h3 className="font-bold text-black">Terms of Service</h3>
          <p>
            This is a demo app, there are no terms of service. Don't be
            surprised if your data dissappears.
          </p>
        </div>
      </div>
    </div>
  )
}
