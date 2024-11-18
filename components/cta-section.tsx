"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "motion";
import { Button } from '@/components/ui/button';


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';



export default function CtaSection() {
    const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;
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
      phone_number: z
        .string()
        .min(1, {
          message: 'Phone number must not be empty.',
        })
        .regex(phoneNumberRegex, {
          message: 'Please enter a valid phone number.',
        }),
      cloud_platform: z.string({
        required_error: 'Please select a cloud platform.',
      }),
      service_category: z.string({
        required_error: 'Please select a service category.',
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
        phone_number: '',
      },
    });
  
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values);
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 bg-dots" >
            <div ref={sectionRef} className="flex flex-row-reverse items-start justify-center w-5/6 h-1/2 mb-8">
                <div className="flex items-center justify-center w-5/6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 bg-white rounded-md font-normal p-6 shadow-lg">
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-xl font-normal">Contact us</span>
                    </div>
                    <div className="flex flex-row gap-5">
                        <FormField
                        control={form.control}
                        name="first_name"
                        render={({ field }) => (
                            <FormItem className="w-1/2">
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your first name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="last_name"
                        render={({ field }) => (
                            <FormItem className="w-1/2">
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your last name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                            <Input
                                placeholder="Enter your email address"
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone_number"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone number</FormLabel>
                            <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <div className="flex flex-row gap-5">
                        <FormField
                        control={form.control}
                        name="cloud_platform"
                        render={({ field }) => (
                            <FormItem className="w-1/2">
                            <FormLabel>Cloud platform</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a cloud platform" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                <SelectItem value="Microsoft Azure">
                                    Microsoft Azure
                                </SelectItem>
                                <SelectItem value="Amazon Web Services">
                                    Amazon Web Services (AWS)
                                </SelectItem>
                                <SelectItem value="Google Cloud Platform">
                                    Google Cloud Platform
                                </SelectItem>
                                <SelectItem value="Oracle Cloud Infrastructure">
                                    Oracle Cloud Infrastructure
                                </SelectItem>
                                <SelectItem value="IBM Cloud">IBM Cloud</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="service_category"
                        render={({ field }) => (
                            <FormItem className="w-1/2">
                            <FormLabel>Service category</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service category" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                <SelectItem value="Infrastructure">
                                    Infrastucture
                                </SelectItem>
                                <SelectItem value="DevOps">DevOps</SelectItem>
                                <SelectItem value="Security">Security</SelectItem>
                                <SelectItem value="Data">Data</SelectItem>
                                <SelectItem value="Migration">Migration</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                            <Textarea
                                placeholder="Tell us about your project or ask us a question."
                                className="resize-none"
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <div className="w-full flex flex-row">
                        <Button
                        className="bg-slate-800 hover:bg-slate-700"
                        type="submit"
                        >
                        Submit
                        </Button>
                    </div>
                    </form>
                </Form>
                </div>
            </div>
        </div>
    )
}