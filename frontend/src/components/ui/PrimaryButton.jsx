// PrimaryButton.jsx — Prakriti Brand CTA Button
// BRAND RULE: Square or barely rounded (rounded-sm). NO pill shapes.
// Always solid #2A4B3C bg, white text. Hover: darken + subtle scale.

/**
 * @param {{ children: React.ReactNode, onClick?: () => void, loading?: boolean, type?: string, fullWidth?: boolean }} props
 */
export default function PrimaryButton({
  children,
  onClick,
  loading = false,
  type = 'button',
  fullWidth = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`
        inline-flex items-center justify-center gap-2
        bg-prakriti-green text-white
        px-8 py-3
        border border-transparent
        text-sm font-medium tracking-widest uppercase
        rounded-sm
        transition-all duration-300
        hover:scale-[1.02] hover:bg-[#1e3629]
        disabled:opacity-60 disabled:cursor-not-allowed
        ${fullWidth ? 'w-full' : ''}
      `}
    >
      {loading ? (
        // Minimal inline spinner — matches brand restraint
        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
}
