const MultimarcaIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
      width='24'
      height='24'
    >
      <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
    </svg>
  );
};

export default MultimarcaIcon;
