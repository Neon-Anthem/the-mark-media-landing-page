import { DIFFERENCE_BETTWEEN_US } from "@/data/difference-between-agencies";
import LogoLettermark from "../../../public/assets/tmm-logo-lettermark";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";

export default function DifferenceBetween() {
  return (
    <div className="">
      <Table className="border border-primary border-collapse">
        <TableBody>
          <TableRow>
            <TableHead>
              <div className="sr-only">Points</div>
            </TableHead>
            <TableHead>
              <span className="text-foreground *:h-auto *:w-32 fill-white">
                <LogoLettermark />
              </span>
            </TableHead>
            <TableHead>Other Agencies</TableHead>
          </TableRow>
          {DIFFERENCE_BETTWEEN_US?.map((process) => {
            return (
              <TableRow
                key={process.point}
                className="first:w-44 relative *:border *:border-primary!"
              >
                <TableCell className="sticky left-0 bg-background">
                  {process.point}
                </TableCell>
                <TableCell className="min-w-xs max-w-sm whitespace-normal">
                  {process.us}
                </TableCell>
                <TableCell className="min-w-xs max-w-sm whitespace-normal">
                  {process.them}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
