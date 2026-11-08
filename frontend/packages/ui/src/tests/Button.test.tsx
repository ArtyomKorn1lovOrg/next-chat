import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Button from '@app/ui/Button';

describe('Button', () => {
  it('вызывает текущий обработчик при клике', async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const user = userEvent.setup();
    render(<Button>Отправить</Button>);

    await user.click(screen.getByRole('button', { name: 'Отправить' }));

    expect(log).toHaveBeenCalledOnce();
    expect(log).toHaveBeenCalledWith('+79999999999');
  });
});
