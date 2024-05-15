import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { toast } from 'sonner';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <div>
      <Button>{t('btn')}</Button>
      <ModeToggle />
    </div>
  );
}
