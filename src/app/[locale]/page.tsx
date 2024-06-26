import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <div>
      <Button className="font-poppins">{t('btn')}</Button>
      <Button variant="secondary" className="font-poppins">
        {t('btnSecondary')}
      </Button>
      <ModeToggle />
    </div>
  );
}
