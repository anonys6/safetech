// Import statements
import { FC } from 'react';
import { Badge } from '../ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../ui/table';

// Define the OrdersCard component
const OrdersCard: FC = () => {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Row 1 */}
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Sale</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            {/* Row 2 */}
            <TableRow>
              <TableCell>
                <div className="font-medium">Olivia Smith</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  olivia@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Refund</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Declined
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
            {/* Row 3 */}
            <TableRow>
              <TableCell>
                <div className="font-medium">Noah Williams</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  noah@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Subscription</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
              <TableCell className="text-right">$350.00</TableCell>
            </TableRow>
            {/* Row 4 */}
            <TableRow>
              <TableCell>
                <div className="font-medium">Emma Brown</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  emma@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Sale</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
              <TableCell className="text-right">$450.00</TableCell>
            </TableRow>
            {/* Additional Rows (repeat as needed) */}
            {/* ... */}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrdersCard;
