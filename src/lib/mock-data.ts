// Static mock data for the SalesBoard UI prototype.
// No backend: every page reads from these arrays.

export type Status = "Completed" | "Pending" | "Cancelled";
export type PaymentMethod = "Card" | "Mobile Money" | "Bank transfer" | "Cash";
export type StockStatus = "In stock" | "Low stock" | "Out of stock";

export const currentUser = {
  name: "Dana Whitfield",
  initials: "DW",
  role: "Operations Manager",
  email: "dana.whitfield@northgate-supply.example",
};

export const business = {
  name: "Northgate Supply Co.",
  legalName: "Northgate Supply Company Ltd",
  email: "hello@northgate-supply.example",
  phone: "+1 (415) 555-0142",
  address: "220 Marlow Street, Suite 14, Portland, OR 97205",
  currency: "USD",
  timezone: "America/Los_Angeles",
  taxId: "US-84-2210945",
};

export const stats = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$48,280",
    change: "+12.5%",
    comparison: "vs. previous month",
    icon: "dollar",
  },
  {
    id: "orders",
    label: "Orders",
    value: "1,284",
    change: "+8.2%",
    comparison: "vs. previous month",
    icon: "orders",
  },
  {
    id: "customers",
    label: "Customers",
    value: "3,842",
    change: "+5.4%",
    comparison: "vs. previous month",
    icon: "customers",
  },
  {
    id: "average",
    label: "Average order",
    value: "$37.60",
    change: "+3.1%",
    comparison: "vs. previous month",
    icon: "average",
  },
] as const;

export const monthlySales = [
  { month: "Dec", revenue: 21400, orders: 612 },
  { month: "Jan", revenue: 24800, orders: 688 },
  { month: "Feb", revenue: 26150, orders: 704 },
  { month: "Mar", revenue: 23980, orders: 651 },
  { month: "Apr", revenue: 30420, orders: 812 },
  { month: "May", revenue: 29160, orders: 795 },
  { month: "Jun", revenue: 34880, orders: 908 },
  { month: "Jul", revenue: 33210, orders: 874 },
  { month: "Aug", revenue: 39640, orders: 1042 },
  { month: "Sep", revenue: 37520, orders: 996 },
  { month: "Oct", revenue: 44190, orders: 1187 },
  { month: "Nov", revenue: 48280, orders: 1284 },
];

export type Customer = {
  id: string;
  name: string;
  initials: string;
  email: string;
  phone: string;
  totalPurchases: string;
  orders: number;
  lastPurchase: string;
  status: "Active" | "Inactive";
  since: string;
  city: string;
};

export const customers: Customer[] = [
  {
    id: "CUS-1041",
    name: "Marisol Vega",
    initials: "MV",
    email: "marisol.vega@brightloom.example",
    phone: "+1 (415) 555-0187",
    totalPurchases: "$12,480.00",
    orders: 34,
    lastPurchase: "Nov 28, 2026",
    status: "Active",
    since: "Mar 2024",
    city: "Portland, OR",
  },
  {
    id: "CUS-1042",
    name: "Okafor & Sons",
    initials: "OS",
    email: "accounts@okaforandsons.example",
    phone: "+1 (503) 555-0116",
    totalPurchases: "$28,910.50",
    orders: 61,
    lastPurchase: "Nov 27, 2026",
    status: "Active",
    since: "Jan 2023",
    city: "Seattle, WA",
  },
  {
    id: "CUS-1043",
    name: "Petra Lindqvist",
    initials: "PL",
    email: "petra.lindqvist@nordhem.example",
    phone: "+1 (206) 555-0193",
    totalPurchases: "$4,320.00",
    orders: 18,
    lastPurchase: "Nov 26, 2026",
    status: "Active",
    since: "Aug 2025",
    city: "Tacoma, WA",
  },
  {
    id: "CUS-1044",
    name: "Hana Yoshida",
    initials: "HY",
    email: "hana.yoshida@kiribito.example",
    phone: "+1 (971) 555-0128",
    totalPurchases: "$9,915.20",
    orders: 27,
    lastPurchase: "Nov 25, 2026",
    status: "Active",
    since: "Jun 2024",
    city: "Eugene, OR",
  },
  {
    id: "CUS-1045",
    name: "Ferreira Group",
    initials: "FG",
    email: "purchasing@ferreiragroup.example",
    phone: "+1 (312) 555-0174",
    totalPurchases: "$18,540.00",
    orders: 45,
    lastPurchase: "Nov 24, 2026",
    status: "Active",
    since: "Feb 2023",
    city: "Boise, ID",
  },
  {
    id: "CUS-1046",
    name: "Tomas Bergeron",
    initials: "TB",
    email: "tomas.bergeron@atelier9.example",
    phone: "+1 (604) 555-0151",
    totalPurchases: "$2,180.75",
    orders: 9,
    lastPurchase: "Nov 21, 2026",
    status: "Active",
    since: "Apr 2026",
    city: "Vancouver, BC",
  },
  {
    id: "CUS-1047",
    name: "Aïcha Ndiaye",
    initials: "AN",
    email: "aicha.ndiaye@sablier.example",
    phone: "+1 (415) 555-0139",
    totalPurchases: "$6,742.30",
    orders: 22,
    lastPurchase: "Nov 19, 2026",
    status: "Active",
    since: "Sep 2024",
    city: "San Jose, CA",
  },
  {
    id: "CUS-1048",
    name: "Rowan Fletcher",
    initials: "RF",
    email: "rowan.fletcher@havenroom.example",
    phone: "+1 (503) 555-0162",
    totalPurchases: "$1,120.00",
    orders: 5,
    lastPurchase: "Sep 04, 2026",
    status: "Inactive",
    since: "Nov 2025",
    city: "Salem, OR",
  },
  {
    id: "CUS-1049",
    name: "Delphine Aubert",
    initials: "DA",
    email: "delphine.aubert@maisonclair.example",
    phone: "+1 (206) 555-0108",
    totalPurchases: "$15,205.60",
    orders: 39,
    lastPurchase: "Nov 18, 2026",
    status: "Active",
    since: "Jul 2023",
    city: "Bellevue, WA",
  },
  {
    id: "CUS-1050",
    name: "Halcyon Interiors",
    initials: "HI",
    email: "orders@halcyoninteriors.example",
    phone: "+1 (208) 555-0145",
    totalPurchases: "$33,760.00",
    orders: 74,
    lastPurchase: "Nov 17, 2026",
    status: "Active",
    since: "May 2022",
    city: "Coeur d'Alene, ID",
  },
  {
    id: "CUS-1051",
    name: "Ines Moreau",
    initials: "IM",
    email: "ines.moreau@petitverre.example",
    phone: "+1 (971) 555-0177",
    totalPurchases: "$860.00",
    orders: 4,
    lastPurchase: "Aug 12, 2026",
    status: "Inactive",
    since: "Jun 2026",
    city: "Bend, OR",
  },
  {
    id: "CUS-1052",
    name: "Samuel Adeyemi",
    initials: "SA",
    email: "samuel.adeyemi@corvid.example",
    phone: "+1 (312) 555-0121",
    totalPurchases: "$7,430.90",
    orders: 25,
    lastPurchase: "Nov 15, 2026",
    status: "Active",
    since: "Oct 2024",
    city: "Spokane, WA",
  },
];

export type Product = {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: string;
  stock: number;
  minStock: number;
  status: StockStatus;
  unitsSold: number;
  revenue: string;
};

export const products: Product[] = [
  {
    id: "PRD-2201",
    name: "Meridian Desk Lamp",
    sku: "MRD-LMP-01",
    category: "Lighting",
    price: "$37.30",
    stock: 148,
    minStock: 40,
    status: "In stock",
    unitsSold: 172,
    revenue: "$6,420",
  },
  {
    id: "PRD-2202",
    name: "Aria Ceramic Mug",
    sku: "ARA-MUG-02",
    category: "Kitchen",
    price: "$13.48",
    stock: 512,
    minStock: 100,
    status: "In stock",
    unitsSold: 310,
    revenue: "$4,180",
  },
  {
    id: "PRD-2203",
    name: "Solstice Notebook",
    sku: "SOL-NTB-03",
    category: "Stationery",
    price: "$12.45",
    stock: 264,
    minStock: 80,
    status: "In stock",
    unitsSold: 245,
    revenue: "$3,050",
  },
  {
    id: "PRD-2204",
    name: "Castor Wool Throw",
    sku: "CST-THR-04",
    category: "Textiles",
    price: "$68.00",
    stock: 6,
    minStock: 20,
    status: "Low stock",
    unitsSold: 84,
    revenue: "$5,712",
  },
  {
    id: "PRD-2205",
    name: "Bramble Stoneware Vase",
    sku: "BRM-VAS-05",
    category: "Decor",
    price: "$42.00",
    stock: 3,
    minStock: 15,
    status: "Low stock",
    unitsSold: 61,
    revenue: "$2,562",
  },
  {
    id: "PRD-2206",
    name: "Halden Candle Set",
    sku: "HLD-CDL-06",
    category: "Home",
    price: "$29.50",
    stock: 0,
    minStock: 12,
    status: "Out of stock",
    unitsSold: 118,
    revenue: "$3,481",
  },
  {
    id: "PRD-2207",
    name: "Linnea Linen Napkins",
    sku: "LNN-NPK-07",
    category: "Textiles",
    price: "$24.00",
    stock: 9,
    minStock: 25,
    status: "Low stock",
    unitsSold: 96,
    revenue: "$2,304",
  },
  {
    id: "PRD-2208",
    name: "Orbit Wall Clock",
    sku: "ORB-CLK-08",
    category: "Decor",
    price: "$54.90",
    stock: 71,
    minStock: 20,
    status: "In stock",
    unitsSold: 47,
    revenue: "$2,580",
  },
  {
    id: "PRD-2209",
    name: "Tundra Cast Skillet",
    sku: "TND-SKL-09",
    category: "Kitchen",
    price: "$89.00",
    stock: 38,
    minStock: 15,
    status: "In stock",
    unitsSold: 52,
    revenue: "$4,628",
  },
  {
    id: "PRD-2210",
    name: "Petal Glass Carafe",
    sku: "PTL-CRF-10",
    category: "Kitchen",
    price: "$31.00",
    stock: 0,
    minStock: 18,
    status: "Out of stock",
    unitsSold: 74,
    revenue: "$2,294",
  },
  {
    id: "PRD-2211",
    name: "Verdant Planter Trio",
    sku: "VRD-PLT-11",
    category: "Decor",
    price: "$46.50",
    stock: 122,
    minStock: 30,
    status: "In stock",
    unitsSold: 63,
    revenue: "$2,929",
  },
  {
    id: "PRD-2212",
    name: "Aubin Pendant Light",
    sku: "AUB-PND-12",
    category: "Lighting",
    price: "$124.00",
    stock: 27,
    minStock: 10,
    status: "In stock",
    unitsSold: 31,
    revenue: "$3,844",
  },
];

export const topProducts = products
  .slice()
  .sort((a, b) => b.unitsSold - a.unitsSold)
  .slice(0, 5);

export const lowStockProducts = products.filter((p) => p.status !== "In stock");

export type Transaction = {
  id: string;
  customer: string;
  date: string;
  amount: string;
  method: PaymentMethod;
  status: Status;
};

export const transactions: Transaction[] = [
  { id: "TRX-90412", customer: "Marisol Vega", date: "Nov 28, 2026", amount: "$1,240.00", method: "Card", status: "Completed" },
  { id: "TRX-90411", customer: "Okafor & Sons", date: "Nov 27, 2026", amount: "$860.50", method: "Bank transfer", status: "Pending" },
  { id: "TRX-90410", customer: "Petra Lindqvist", date: "Nov 26, 2026", amount: "$320.00", method: "Mobile Money", status: "Completed" },
  { id: "TRX-90409", customer: "Hana Yoshida", date: "Nov 25, 2026", amount: "$1,915.20", method: "Card", status: "Cancelled" },
  { id: "TRX-90408", customer: "Ferreira Group", date: "Nov 24, 2026", amount: "$540.00", method: "Cash", status: "Completed" },
  { id: "TRX-90407", customer: "Halcyon Interiors", date: "Nov 23, 2026", amount: "$3,180.00", method: "Bank transfer", status: "Completed" },
  { id: "TRX-90406", customer: "Aïcha Ndiaye", date: "Nov 22, 2026", amount: "$276.40", method: "Mobile Money", status: "Completed" },
  { id: "TRX-90405", customer: "Tomas Bergeron", date: "Nov 21, 2026", amount: "$412.00", method: "Card", status: "Pending" },
  { id: "TRX-90404", customer: "Delphine Aubert", date: "Nov 18, 2026", amount: "$1,024.75", method: "Card", status: "Completed" },
  { id: "TRX-90403", customer: "Samuel Adeyemi", date: "Nov 15, 2026", amount: "$688.00", method: "Cash", status: "Completed" },
  { id: "TRX-90402", customer: "Marisol Vega", date: "Nov 14, 2026", amount: "$149.90", method: "Mobile Money", status: "Cancelled" },
  { id: "TRX-90401", customer: "Okafor & Sons", date: "Nov 12, 2026", amount: "$2,460.00", method: "Bank transfer", status: "Completed" },
];

export type Sale = {
  reference: string;
  customer: string;
  date: string;
  items: number;
  total: string;
  status: Status;
};

export const sales: Sale[] = [
  { reference: "SO-4820", customer: "Marisol Vega", date: "Nov 28, 2026", items: 6, total: "$1,240.00", status: "Completed" },
  { reference: "SO-4819", customer: "Okafor & Sons", date: "Nov 27, 2026", items: 14, total: "$860.50", status: "Pending" },
  { reference: "SO-4818", customer: "Petra Lindqvist", date: "Nov 26, 2026", items: 3, total: "$320.00", status: "Completed" },
  { reference: "SO-4817", customer: "Hana Yoshida", date: "Nov 25, 2026", items: 9, total: "$1,915.20", status: "Cancelled" },
  { reference: "SO-4816", customer: "Ferreira Group", date: "Nov 24, 2026", items: 4, total: "$540.00", status: "Completed" },
  { reference: "SO-4815", customer: "Halcyon Interiors", date: "Nov 23, 2026", items: 22, total: "$3,180.00", status: "Completed" },
  { reference: "SO-4814", customer: "Aïcha Ndiaye", date: "Nov 22, 2026", items: 2, total: "$276.40", status: "Completed" },
  { reference: "SO-4813", customer: "Tomas Bergeron", date: "Nov 21, 2026", items: 5, total: "$412.00", status: "Pending" },
  { reference: "SO-4812", customer: "Delphine Aubert", date: "Nov 18, 2026", items: 8, total: "$1,024.75", status: "Completed" },
  { reference: "SO-4811", customer: "Samuel Adeyemi", date: "Nov 15, 2026", items: 7, total: "$688.00", status: "Completed" },
];

export const salesByCategory = [
  { category: "Kitchen", revenue: 14280 },
  { category: "Decor", revenue: 11460 },
  { category: "Lighting", revenue: 9840 },
  { category: "Textiles", revenue: 7620 },
  { category: "Stationery", revenue: 5080 },
];

export const customerGrowth = [
  { month: "Jun", customers: 2980 },
  { month: "Jul", customers: 3105 },
  { month: "Aug", customers: 3288 },
  { month: "Sep", customers: 3421 },
  { month: "Oct", customers: 3644 },
  { month: "Nov", customers: 3842 },
];

export const categories = ["Kitchen", "Decor", "Lighting", "Textiles", "Stationery", "Home"];

export const dateRanges = ["Last 7 days", "Last 30 days", "Last 90 days", "Last 12 months"];
