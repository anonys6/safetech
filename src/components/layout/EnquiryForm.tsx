"use client";

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from '../ui/textarea';
import { useTranslations } from "next-intl";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters long",
    }),
    organization: z.string().optional(),
    country: z.string().optional(),
    email: z.string().email({
        message: "Invalid email address",
    }),
    phone: z.string().optional(),
    message: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

function EnquiryForm() {
    const t = useTranslations("EnquiryForm");

    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormSchema) => {
        console.log(data);
        // Handle form submission
    };

    return (
        <div className="flex flex-col px-5 flex-1">
            <div className='flex flex-col gap-6'>
                <h2 className='text-center text-3xl text-primary font-bold'>{t("title")}</h2>

                <div className="px-5 ">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder={t("name_placeholder")} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="organization"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder={t("organization_placeholder")} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder={t("country_placeholder")} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder={t("email_placeholder")} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder={t("phone_placeholder")} {...field} />
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
                                        <FormControl>
                                            <Textarea placeholder={t("message_placeholder")} {...field} className="resize-none" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit">{t("submit_button")}</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default EnquiryForm;