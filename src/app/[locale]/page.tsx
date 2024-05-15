import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <div>
      <Button>{t('btn')}</Button>
    </div>
  );
}
