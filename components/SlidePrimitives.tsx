import React from 'react';

type ClassNameProps = {
  className?: string;
};

export interface SlideFrameProps extends ClassNameProps {
  children: React.ReactNode;
  /** Optional visual treatment for slides with a different emphasis. */
  variant?: 'default' | 'surface' | 'fullBleed';
}

export const SlideFrame: React.FC<SlideFrameProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const variants = {
    default: 'bg-canvas',
    surface: 'rounded-[2rem] border border-border bg-surface shadow-2xl',
    fullBleed: 'overflow-hidden bg-canvas',
  };

  return (
    <div
      className={`flex h-[70vh] min-h-[560px] w-full max-w-[120rem] flex-col overflow-hidden px-8 py-8 sm:px-12 sm:py-10 lg:px-16 lg:py-12 ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

export interface SlideHeaderProps extends ClassNameProps {
  kicker?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  aside?: React.ReactNode;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({
  aside,
  className = '',
  kicker,
  subtitle,
  title,
}) => (
  <header className={`flex items-start justify-between gap-8 ${className}`}>
    <div className="min-w-0">
      {kicker && (
        <p className="text-base font-semibold uppercase tracking-[0.28em] text-primary">
          {kicker}
        </p>
      )}
      <h2 className="mt-2 text-5xl font-bold leading-tight tracking-tight text-text sm:text-6xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-4xl text-xl leading-relaxed text-muted sm:text-2xl">{subtitle}</p>}
    </div>
    {aside && <div className="shrink-0 text-right text-lg text-muted">{aside}</div>}
  </header>
);

export interface PanelProps extends ClassNameProps {
  children: React.ReactNode;
  as?: 'div' | 'section' | 'article';
  padding?: 'none' | 'compact' | 'default';
}

export const Panel: React.FC<PanelProps> = ({
  as = 'div',
  children,
  className = '',
  padding = 'default',
}) => {
  const Element = as;
  const paddings = {
    none: 'p-0',
    compact: 'p-5',
    default: 'p-7',
  };

  return <Element className={`rounded-3xl border border-border bg-surface shadow-xl ${paddings[padding]} ${className}`}>{children}</Element>;
};

export interface MetricCardProps extends ClassNameProps {
  label: React.ReactNode;
  value: React.ReactNode;
  detail?: React.ReactNode;
  padding?: PanelProps['padding'];
}

export const MetricCard: React.FC<MetricCardProps> = ({ className = '', detail, label, padding, value }) => (
  <Panel className={`flex min-h-36 flex-col justify-between ${className}`} padding={padding}>
    <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">{label}</p>
    <p className="mt-4 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">{value}</p>
    {detail && <p className="mt-2 text-xl leading-relaxed text-muted">{detail}</p>}
  </Panel>
);

export interface CalloutProps extends ClassNameProps {
  children: React.ReactNode;
  tone?: 'primary' | 'accent' | 'warning';
}

export const Callout: React.FC<CalloutProps> = ({ children, className = '', tone = 'primary' }) => {
  const tones = {
    primary: 'border-primary/30 bg-primary/10',
    accent: 'border-accent/30 bg-accent/10',
    warning: 'border-danger/40 bg-danger/10',
  };
  return <div className={`rounded-2xl border px-6 py-5 text-xl font-medium leading-relaxed text-text ${tones[tone]} ${className}`}>{children}</div>;
};

export interface RevealProps extends ClassNameProps {
  children: React.ReactNode;
  visible: boolean;
  /** Keeps hidden content out of the accessibility tree while it is unrevealed. */
  preserveLayout?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = '', preserveLayout = true, visible }) => (
  <div
    aria-hidden={!visible}
    className={`transition-all duration-300 ${
      visible
        ? 'visible translate-y-0 opacity-100'
        : `${preserveLayout ? 'invisible' : 'hidden'} translate-y-3 opacity-0`
    } ${className}`}
  >
    {children}
  </div>
);

export interface CodeBlockProps extends ClassNameProps {
  children: React.ReactNode;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className = '', language }) => (
  <div className={`overflow-hidden rounded-2xl border border-border bg-elevated/70 shadow-inner ${className}`}>
    {language && <div className="border-b border-border px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted">{language}</div>}
    <pre className="overflow-x-auto p-6 font-mono text-2xl leading-relaxed text-text"><code>{children}</code></pre>
  </div>
);
