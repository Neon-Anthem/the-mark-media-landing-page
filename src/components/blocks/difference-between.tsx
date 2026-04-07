import { DIFFERENCE_BETTWEEN_US } from "@/data/difference-between-agencies";
import LogoLettermark from "../../../public/assets/tmm-logo-lettermark";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";

export default function DifferenceBetween() {
  const headers = DIFFERENCE_BETTWEEN_US?.map((h) => h.point);

  return (
    <div className="mt-8 sm:mt-16">
      <Table>
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
          </TableRow>
          {DIFFERENCE_BETTWEEN_US?.map((process) => {
            return (
              <TableRow key={process.point}>
                <TableCell>{process.point}</TableCell>
                <TableCell>{process.us}</TableCell>
                <TableCell>{process.them}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
