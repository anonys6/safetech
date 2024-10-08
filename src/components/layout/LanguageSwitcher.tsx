import React, { useState, useTransition } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';


function LanguageSwitcher() {
    const [language, setLanguage] = useState("English");
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (value: string) => {
        setLanguage(value);
        startTransition(() => {
            router.replace(`/${value}`);
        });
    }

    return (
        <div>
            <Select
                onValueChange={onSelectChange}
                defaultValue={localActive}
                disabled={isPending}
            >
                <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder={language} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ar">Arabic</SelectItem>
                </SelectContent>
            </Select>

        </div>
    );
}

export default LanguageSwitcher