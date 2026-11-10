// Material Symbols icon. size in px.
export default function Icon({ name, size = 18, className = "" }) {
  return (
    <span aria-hidden="true" className={`ms ${className}`} style={{ fontSize: size, width: size, height: size }}>
      {name}
    </span>
  );
}

// Icons used on the site, loaded from Google Fonts (names must stay in alphabetical order).
export const ICON_NAMES = [
  "account_balance_wallet", "apartment", "arrow_forward", "arrow_outward", "bakery_dining", "bolt", "call", "campaign",
  "celebration", "chat", "check", "check_circle", "checkroom", "close", "code", "content_cut", "dark_mode", "dashboard",
  "directions_bus", "directions_car", "diversity_3", "dns", "emoji_people", "expand_more", "fitness_center", "groups", "handshake",
  "home_work", "hotel", "inventory_2", "language", "light_mode", "local_hospital", "location_on", "mail", "menu",
  "menu_book", "palette", "person", "restaurant", "school", "smartphone", "spa", "translate", "travel_explore",
  "work", "workspace_premium",
];
