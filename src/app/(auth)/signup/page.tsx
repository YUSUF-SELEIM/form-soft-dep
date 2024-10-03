'use client'
import SignInOauth from '@/components/auth/signIn-Oauth'
import SignUpForm from '@/components/auth/SignUpForm'
import SerparatorText from '@/components/serparator-text'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const SignUp = () => {
    const { status } = useSession()
    const router = useRouter()
    if (status === 'authenticated') {
        router.push('/')
        return
    }
    return (
        <div className='flex h-screen-no-nav items-center justify-center'>
            <Card className='flex flex-col items-center justify-center gap-2 shadow-md'>
                <CardHeader className='space-y-4'>
                    <CardTitle className='text-lg font-bold'>Sign-up</CardTitle>
                    <CardDescription>
                        Sign-up to Sentilytics to start coding with your friends
                        in real-time.
                    </CardDescription>
                </CardHeader>
                <CardContent className='w-full'>
                    <SignUpForm />
                    <SerparatorText text='OR' />
                    <SignInOauth />
                </CardContent>
            </Card>
        </div>
    )
}

export default SignUp
