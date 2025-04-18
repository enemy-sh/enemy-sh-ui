"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import { Button } from '@/components/ui/button';
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Loader2 } from "lucide-react";



export default function CtaSection() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { data: session } = useSession();
    const contactApiEndpoint = process.env.NEXT_PUBLIC_CONTACT_API_ENDPOINT;

    const formSchema = z.object({
      first_name: z.string().min(1, {
        message: 'First name must be at least 2 characters.',
      }),
      last_name: z.string().min(1, {
        message: 'Last name must be at least 2 characters.',
      }),
      email: z.string().email({
        message: 'Please enter a valid email address',
      }),
      message: z
        .string()
        .min(10, {
          message: 'Message must be at least 10 characters.',
        })
        .max(160, {
          message: 'Message must not be longer than 160 characters.',
        }),
    });
  
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        first_name: '',
        last_name: '',
        email: '',
      },
    });
  
    function onSubmit(values: z.infer<typeof formSchema>) {
        if (submitted) {
            toast.error('You have already submitted this form');
            return;
        }

        if (session && contactApiEndpoint) {
            const loadingToast = toast.loading('Sending message...');
            setLoading(true);
            fetch(contactApiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + session.accessToken,
                },
                body: JSON.stringify({
                    name: values.first_name + ' ' + values.last_name,
                    email: values.email,
                    message: values.message,
                }),
            })
            .then(async response => {
                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.message || `HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                toast.dismiss(loadingToast);
                toast.success('Thank you for your message');
                setLoading(false);
                setSubmitted(true);
            })
            .catch(error => {
                toast.dismiss(loadingToast);
                toast.error(`${error.message}`);
                setLoading(false);
            });
        }
    }

    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionNode = sectionRef.current;
        if (sectionNode) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        animate(sectionNode, { y: [100, 0], opacity: [0, 1] }, { duration: 1, delay: 0.5 });
                        observer.disconnect();
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(sectionNode);
            return () => observer.disconnect();
        }
    }, []);

    return (
        <section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-slate-50 bg-dots bg-bottom" >
            <div ref={sectionRef} className="flex flex-row-reverse items-start justify-center w-full sm:w-5/6 h-1/2 mb-8">
                <div className="flex items-center justify-center w-5/6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 bg-white rounded-none font-normal p-6 shadow-lg md:w-fit w-full">
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-xl font-normal">contact us</span>
                        <img src="/enemy.svg" alt="enemy.sh" className="h-6" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <FormField
                        control={form.control}
                        name="first_name"
                        render={({ field }) => (
                            <FormItem className="w-full md:w-1/2">
                            <FormLabel>first name</FormLabel>
                            <FormControl>
                                <Input placeholder="enter your first name" {...field} className="rounded-none" />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="last_name"
                        render={({ field }) => (
                            <FormItem className="w-full md:w-1/2">
                            <FormLabel>last name</FormLabel>
                            <FormControl>
                                <Input placeholder="enter your last name" {...field} className="rounded-none" />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                            <Input
                                placeholder="enter your email address"
                                {...field}
                                className="rounded-none"
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>message</FormLabel>
                            <FormControl>
                            <Textarea
                                placeholder="Tell us about your project or ask us a question."
                                className="resize-none rounded-none"
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <div className="w-full flex flex-row">
                        <Button
                        className="bg-black hover:bg-gray-700 rounded-none transition-all duration-200"
                        type="submit"
                        disabled={loading}
                        >
                        {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> submit</> : "submit"}
                        </Button>
                    </div>
                    </form>
                </Form>
                </div>
            </div>
        </section>
    )
}
